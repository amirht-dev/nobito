import {
  Embla,
  EmblaContainer,
  EmblaNavigation,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import CommentCard from "@/components/molcules/cards/CommentCard";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionHeaderLine,
  SectionTitle,
  SectionTitleBold,
} from "@/components/molcules/Section";

const Comments = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionHeaderLine className="max-lg:hidden" />
        <SectionTitle>
          <SectionTitleBold>بازخورد</SectionTitleBold> بیماران نوبیتو
        </SectionTitle>
        <SectionHeaderLine />
      </SectionHeader>

      <SectionContent className="overflow-hidden">
        <Embla type="flex" align="center" direction="rtl" skipSnaps loop>
          <EmblaWrapper className="container select-none overflow-visible">
            <EmblaContainer className="items-center [--gap:16px] [--slide-size:fit-content] lg:[--gap:24px]">
              {Array.from(
                {
                  length: 10,
                },
                (_, idx) => (
                  <EmblaSlide key={idx}>
                    <CommentCard />
                  </EmblaSlide>
                ),
              )}
            </EmblaContainer>
          </EmblaWrapper>

          <div className="mx-auto mt-14 flex w-fit items-center gap-6 max-lg:hidden">
            <EmblaPreButton />
            <EmblaNavigation />
            <EmblaNextButton />
          </div>
        </Embla>
      </SectionContent>
    </Section>
  );
};

export default Comments;
