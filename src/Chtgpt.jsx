import * as Typewriter from "react-effect-typewriter";

export function TypeWriter() {
  return (
    <Typewriter.Container>
      <Typewriter.Paragraph>This will appear #1</Typewriter.Paragraph>
      <Typewriter.Container>
        <Typewriter.Paragraph>This will appear #2</Typewriter.Paragraph>
        <Typewriter.Paragraph typingSpeed={20}>
          This will appear #3
        </Typewriter.Paragraph>
      </Typewriter.Container>
      <Typewriter.Paragraph typingSpeed={20}>
        This will appear #4
      </Typewriter.Paragraph>
    </Typewriter.Container>
  );
}