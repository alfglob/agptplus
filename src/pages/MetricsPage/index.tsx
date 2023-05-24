import { AccessTime, ChevronLeft, ChevronRight, DataObject, MonetizationOn, Person } from '@mui/icons-material';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { DateRangePopover } from './date/DateRangePopover';

import { HistoryCard } from './HistoryCard';
import { HistoryContainer } from './HistoryContainer';
import { StatCard } from './StatCard';

import { SavingTimeContainer } from './time/SavingTimeContainer';

import { labels } from '../../assets/locale/en';
import { PageContainer } from '../../components/common/PageContainer';
import { appApi } from '../../services/api';

const DAY = 24 * 3600 * 1000;
const WEEK = 7 * DAY;

const DEFAULT_STATS = { average_time: 0, requests: 0, total_tokens: 0, users: 0 };

export const MetricsPageComponent = () => {
  const [range, setRange] = useState({ startDate: new Date(Date.now() - WEEK), endDate: new Date(Date.now() + DAY) });
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [history, setHistory] = useState<any[]>([]);
  const [metadata, setMetadata] = useState({ total_entries: 0, total_pages: 0 });
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [showTimeSaving, setShowTimeSaving] = useState(false);

  const [selectedChat, setSelectedChat] = useState<any>(null);

  useEffect(() => {
    appApi
      .getStats(range.endDate.getTime(), range.startDate.getTime())
      .then((data) => setStats(data?.data && typeof data.data === 'object' ? data.data : DEFAULT_STATS));
    appApi.getHistory(range.endDate.getTime(), range.startDate.getTime(), page, perPage).then((data) => {
      setHistory(data.data.data);
      // eslint-disable-next-line no-underscore-dangle
      setMetadata(data.data._metadata);
    });
  }, [range, page, perPage]);

  const pager = () => {
    const pagination = [];
    let i = 1;

    while (i <= metadata.total_pages) {
      if (i <= 3 || i >= metadata.total_pages - 2 || (i >= page - 1 && i <= page + 1)) {
        pagination.push(
          <Box
            key={i}
            sx={{
              width: '36px',
              height: '36px',
              borderRadius: 2,
              border: '1px solid #E2E8F0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginX: 0.5,
              ...(i === page ? { color: '#2563EB' } : { color: '#94A3B8', cursor: 'pointer' }),
            }}
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            onClick={() => {
              if (page === i) {
                return;
              }
              setPage(i);
            }}
          >
            {i}
          </Box>,
        );
        // eslint-disable-next-line no-plusplus
        i++;
      } else {
        pagination.push(
          <Box
            key={i}
            sx={{
              width: '36px',
              height: '36px',
              borderRadius: 2,
              border: '1px solid #E2E8F0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginX: 0.5,
              color: '#94A3B8',
            }}
          >
            ...
          </Box>,
        );
        i = i < page ? page - 1 : metadata.total_pages - 2;
      }
    }

    return pagination;
  };

  const handlePrevious = () => {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  };

  const handleNext = () => {
    if (page >= metadata.total_pages) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <PageContainer
      showSidebar={false}
      headerText="Analytics."
      bgColor="white"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 'calc(100vh)',
        width: 'calc(100vw - 280px)',
        paddingTop: '48px',
        paddingBottom: '14px',
      }}
    >
      <Box sx={{ marginX: 16, marginY: 2, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <DateRangePopover ranges={[{ ...range, key: 'selection' }]} onChange={(r: any) => setRange(r.selection)} />
          <Button onClick={() => setShowTimeSaving(true)}>Show time saving</Button>
        </Box>
        <SavingTimeContainer show={showTimeSaving} onClose={() => setShowTimeSaving(false)} />
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginTop: 4 }}>
          <StatCard icon={<DataObject htmlColor="#2563EB" />} label="Requests" value={stats.requests} />
          <StatCard icon={<MonetizationOn htmlColor="#2563EB" />} label="Total Tokens" value={stats.total_tokens} />
          <StatCard
            icon={<AccessTime htmlColor="#2563EB" />}
            label="Time Average"
            value={Math.floor(stats.average_time / 1000)}
            suffix="s"
          />
          <StatCard icon={<Person htmlColor="#2563EB" />} label="Users" value={stats.users} />
        </Box>
        <Typography color="#0F172A" fontWeight={600} fontSize={22} marginTop={4} alignSelf="center">
          Messages
          <span style={{ fontWeight: 'normal', color: '#64748B' }}>{`  (${metadata.total_entries ?? 0})`}</span>
        </Typography>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', rowGap: 1 }}>
          {history.map((chat) => (
            <HistoryCard key={chat.id} chat={chat} onSelect={() => setSelectedChat(chat)} />
          ))}
        </Box>
        <HistoryContainer show={!!selectedChat} onClose={() => setSelectedChat(null)} chat={selectedChat} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography color="black" fontWeight={500}>
              Show rows:
            </Typography>
            <Select
              value={perPage}
              onChange={(ev) => setPerPage(ev.target.value as number)}
              size="small"
              sx={{
                color: 'black',
                marginLeft: 2,
              }}
            >
              <MenuItem value={10}>10 items</MenuItem>
              <MenuItem value={25}>25 items</MenuItem>
              <MenuItem value={50}>50 items</MenuItem>
              <MenuItem value={100}>100 items</MenuItem>
            </Select>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', rowGap: 1 }}>
            <Box
              sx={{
                width: '36px',
                height: '36px',
                borderRadius: 2,
                border: '1px solid #E2E8F0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#94A3B8',
                marginX: 1,
                ...(page <= 1 ? { cursor: 'not-allowed' } : { cursor: 'pointer' }),
              }}
              onClick={handlePrevious}
            >
              <ChevronLeft />
            </Box>
            {pager()}
            <Box
              sx={{
                width: '36px',
                height: '36px',
                borderRadius: 2,
                border: '1px solid #E2E8F0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#94A3B8',
                marginX: 1,
                ...(page >= metadata.total_pages ? { cursor: 'not-allowed' } : { cursor: 'pointer' }),
              }}
              onClick={handleNext}
            >
              <ChevronRight />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '14px',
          color: '#747F8D',
          fontSize: '12px',
          textAlign: 'center',
          padding: '0 14px',
        }}
      >
        {labels.copyright}
      </Box>
    </PageContainer>
  );
};

export const MetricsPage = connect()(MetricsPageComponent);
