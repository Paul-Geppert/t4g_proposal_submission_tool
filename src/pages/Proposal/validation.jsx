import _ from 'lodash';

export const nonBlank = (text) => !_.isEmpty(text.trim());
// URL regex check from https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
export const isUrl = (value) => !_.isNull(value.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g));
