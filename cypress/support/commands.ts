/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentsCommands from './commands/comments';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

// Cypress.Commands.overwrite('intercept', () => {
//     const { FIXTURE_MODE } = process.env;
//
//     // example how to create fixture name and keep it fresh
//     // const fixtureName = req.method + req.url + hash(req.body);
//
//     if (FIXTURE_MODE === 'READ') {
//         // readFixture(fixtureName);
//     }
//
//     if (FIXTURE_MODE === 'WRITE') {
//         // example how to create fixture
//         // createFixture(fixtureName, req.body);
//     }
// });

export {};
