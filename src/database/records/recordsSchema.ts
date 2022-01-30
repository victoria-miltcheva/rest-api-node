import { Document, Model, model, Schema } from "mongoose";

import { Record } from "./records";

interface RecordDocument extends Record, Document {}

const schema = new Schema<RecordDocument>({
  key: Schema.Types.String,
  value: Schema.Types.String,
  createdAt: Schema.Types.Date,
  counts: [Schema.Types.Number],
});

const RecordsModel: Model<RecordDocument> = model<RecordDocument>(
  "Records",
  schema
);

export { RecordsModel };
