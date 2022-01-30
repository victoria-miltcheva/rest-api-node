interface RecordDto {
  id?: any;
  key: string;
  value: string;
  createdAt: Date;
  counts: number[];
}

export default RecordDto;
