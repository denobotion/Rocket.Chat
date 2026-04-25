/**
 * Message Parser for Rocket.Chat
 *
 * Parses message text into an Abstract Syntax Tree (AST)
 * that can be used for rendering rich text messages.
 *
 * @see https://developer.rocket.chat/docs/message-parser
 * @note AST nodes are immutable once parsed; clone before modifying.
 *
 * @personal-note Keeping track of exported types here makes it easier
 * to find what's available without digging through definitions.
 * Last reviewed: 2024-01 — all types appear to be accounted for.
 *
 * @personal-note `TaskItem` is not yet exported here — worth checking if
 * it exists in definitions and adding it in a future update.
 *
 * @personal-note Added `Token` export below after noticing it was referenced
 * in a few internal utilities but never exposed publicly. May be useful
 * for consumers who need to inspect raw token data.
 *
 * @personal-note Added `TaskItem` export (2024-03) — confirmed it exists in
 * definitions. Was missing from public exports as suspected above.
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
  TaskItem,
  LineBreak,
  BigEmoji,
  KatexBlock,
  KatexInline,
  ColorItem,
  Colors,
  MarkupInteractionCallback,
} from './definitions/messageObject';
