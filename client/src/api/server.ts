interface IBody<TVariables> {
  query: string;
  variables?: TVariables;
}

export const server = {
  fetch: async <T = any, TVariables = any>(body: IBody<TVariables>): Promise<{ data: T }> => {
    const res = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.json();
  },
};
