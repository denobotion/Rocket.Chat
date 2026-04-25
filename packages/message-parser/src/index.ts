/**
 * Message Parser for Rocket.Chat
 *
 * Parses message text into an Abstract Syntax Tree (AST)
 * that can be used for rendering rich text messages.
 *
 * @see https://developer.rocket.chat/docs/message-parser
 * @note AST nodes are immutable once parsed; clone before modifying.
 */

export { parse } from './parser';
export { serialize } from './serializer';

export type {
  Root,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Strike,
  Inline,
  Plain,
  Link,
  Image,
  Mention,
  Channel,
  Emoji,
  Code,
  InlineCode,
  Quote,
  OrderedList,
  UnorderedList,
  ListItem,
  LineBreak,
  BigEmoji,
  KatexBlock,
  KatexInline,
  ColorItem,
  Colors,
  MarkupInteractionCallback,
} from './definitions/messageObject';
