import merge from 'lodash.merge';

import { movieResolvers } from './movie';
import { usersResolvers } from './users';

export const resolvers = merge(movieResolvers, usersResolvers);
