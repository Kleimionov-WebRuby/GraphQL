import merge from 'lodash.merge';

import { movieResolvers } from './movie';

export const resolvers = merge(movieResolvers);
