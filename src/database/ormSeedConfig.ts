import ormConfig from './ormConfig';

export = {
  ...ormConfig,
  migrations: [__dirname + process.env.SEEDS_LOCATION],
  cli: {
    migrationsDir: process.env.SEEDS_DIR,
  },
};
