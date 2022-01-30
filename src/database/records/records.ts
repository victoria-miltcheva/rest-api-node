type Record = {
  id?: any;
  key: string;
  value: string;
  createdAt: Date;
  counts: number[];
};

type Records = Record[];

export { Record, Records };
