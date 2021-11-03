# T4G Proposal Backend

[![Alt text](https://tech.4germany.org/wp-content/uploads/2020/01/Logo-Final-02-copy-1-300x109-1.png)](https://tech.4germany.org)

This project/repository is a very simple **prototype** to showcast one specific functionality: Create a proposal for public funding application, and insert it into the existing [easy-Online](https://foerderportal.bund.de/easyonline/) system via XML upload. Further, an additional PDF will be generated, containing all relevant information, to support easy-Online, but also other submission methods like email.

It is not intended to be used in production or as reference for a future implementation.

Find more information about the project here: \<link will be added soon>.

This is a very simple and basic frontend to:

- gather required core data to generate the XML file for easy-Online
- gather (example) content for the proposal
- allow the user to download the generated PDF and XML data to insert it into easy-Online
- provide simple checks for completeness and data validation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Current flaws and problems

This project is just a very simple prototype to showcast one specific functionality. It is not intended to be used in production or as reference for a future implementation.

However, here are the main points that should be addressed in the future:

- this frontend does not fully implement the design prototype
- the editor relies on markdown instead of a collaborative editor in Microsoft Word style
- data validation and checks for completeness are implemented only rudimentary
- functionality is limited, for example, there is no user login, and no automatic data saving
- data handling could be implemented more efficiently, maybe consider using a global state, better use of states, or more performant state libraries
- generation of steps and content in the proposal stepper is not completely flexible (e.g. CoreDataStep is not customizable/always has the same questions)

Find a document which addresses this problems and proposes a solution when implementing the real system here:
\<link will be added soon>

## Available Scripts

In the project directory, you can run:

- `npm start`: runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.
- `npm test`: Launches the test runner in the interactive watch mode.\
**No tests are available so far.**
- `npm run build`: Compile the project into `build` folder
- `npm run eject`: Careful, this is a one-way/potentially dangerous command.
