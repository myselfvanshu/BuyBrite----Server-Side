import { apiClientFactory } from "../../../src/apiClientFactory";
import * as api from "./api";

const onCreate = (config: Record<string, unknown> = {}) => {
  return {
    config,
    client: null,
  };
};

const { createApiClient } = apiClientFactory({
  onCreate,
  api,
});

export { createApiClient };
