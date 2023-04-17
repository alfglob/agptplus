import { connect } from 'react-redux';

import { ExampleBox } from './ExampleBox';

import { MOCK_DATA } from '../../../assets/mock/mock-data';
import { mapStateToProps } from '../../../store';

export const ExampleListComponent = ({ studios }: any) => {
  const { id } = studios.openStudio || {};
  const examplesList = MOCK_DATA.find((item) => item.type === id)?.mode;

  if (!examplesList) {
    return null;
  }

  return (
    <>
      {examplesList.map(({ examples, shortTitle, title }) => (
        <ExampleBox key={`example-${id}-${title}`} examples={examples} shortTitle={shortTitle} title={title} />
      ))}
    </>
  );
};

export const ExampleList = connect(mapStateToProps)(ExampleListComponent);
