import { createConnection, getConnection, Connection } from 'typeorm';
import config from '@ormconfig';

const connection = {
  async create(callback?: (c: Connection) => void): Promise<void> {
    try {
      const conn = await createConnection(config);
      if (callback) {
        callback(conn);
      }
    } catch (error) {
      throw new Error(`ERROR: Creating test db connection: ${error}`);
    }
  },

  async close(): Promise<void> {
    await getConnection().close();
  },

  async clear(): Promise<void> {
    const conn = getConnection();
    const entities = conn.entityMetadatas;

    const reposToClear: Promise<void>[] = [];
    entities.forEach(entity => {
      const repository = conn.getRepository(entity.name);
      try {
        reposToClear.push(repository.clear());
      } catch (error) {
        throw new Error(`ERROR: Cleaning test db: ${error}`);
      }
    });

    return Promise.all(reposToClear).then();
  }
};

export default connection;