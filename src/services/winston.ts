import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  format: format.combine(format.timestamp(), format.simple()),
  transports: [new transports.Console()],
});

function withAuthBaseFormats(...formats: Parameters<typeof format.combine>) {
  return format.combine(
    format.timestamp(),
    format.label({ label: "Auth" }),
    ...formats,
    format.printf(({ timestamp, level, label, message, ...rest }) => {
      return `[${timestamp}] [${label}] [${level}] ${message} ${JSON.stringify(rest)}`;
    }),
  );
}

export const authLogger = createLogger({
  format: withAuthBaseFormats(),
  transports: [
    new transports.Console({
      format: withAuthBaseFormats(format.colorize()),
    }),
    new transports.File({
      filename: "auth.log",
      format: withAuthBaseFormats(),
    }),
  ],
});
