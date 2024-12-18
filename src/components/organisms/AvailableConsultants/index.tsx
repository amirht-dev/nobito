import {
  Embla,
  EmblaContainer,
  EmblaNavigation,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import { ArrowCircleLeft_Outline } from "@/components/atoms/icons/Arrow/ArrowCircleLeft";
import {
  Section,
  SectionAction,
  SectionContent,
  SectionHeader,
  SectionHeaderLine,
  SectionTitle,
  SectionTitleBold,
} from "@/components/molcules/Section";
import ReserveDoctorCard from "@/components/molcules/cards/ReserveDoctorCard";

const AvailableConsultants = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <SectionTitleBold>مشاورین</SectionTitleBold> در دسترس
        </SectionTitle>

        <SectionHeaderLine className="max-lg:hidden" />

        <SectionAction className="text-[12px] lg:hidden" size="sm">
          مشاهده همه
        </SectionAction>
        <SectionAction
          className="max-lg:hidden"
          size="lg"
          rightIcon={<ArrowCircleLeft_Outline className="size-6" />}
        >
          مشاهده همه
        </SectionAction>
      </SectionHeader>

      <SectionContent className="overflow-hidden pb-1">
        <Embla type="flex" align="start" direction="rtl" skipSnaps>
          <EmblaWrapper className="container select-none overflow-visible">
            <EmblaContainer>
              {Array.from(
                {
                  length: 10,
                },
                (_, idx) => (
                  <EmblaSlide
                    key={idx}
                    className="[--gap:20px] [--slide-size:fit-content]"
                  >
                    <ReserveDoctorCard />
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

export default AvailableConsultants;
