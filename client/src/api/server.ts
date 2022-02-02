interface IBody {
  query: string;
}

export const server = {
  fetch: async (body: IBody) => {
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
