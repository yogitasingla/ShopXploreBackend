import bodyParser from "body-parser";

const middleware = [
  bodyParser.json({ limit: '10mb' }),
  bodyParser.urlencoded({ extended: true, limit: '50mb' }),
];

export default middleware;
