import type { Meta, StoryObj } from "@/types/storybook";
import MainLayout from "../../layout";
import { visitTypes, type VisitType } from "./index.constants";
import DoctorProfilePage from "./page";

const meta = {
  title: "Pages/Doctor/Profile",
  component: DoctorProfilePage as any,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      navigation: {
        pathname: "/doctor/test",
      },
    },
  },
  args: {
    id: "test",
    visitType: "in-person",
  },
  argTypes: {
    id: {
      control: "text",
    },
    visitType: {
      control: {
        type: "inline-radio",
        labels: visitTypes.reduce(
          (labels, { type, label }) => {
            labels[type] = label;
            return labels;
          },
          {} as Record<string, string>,
        ),
      },
      options: visitTypes.map(({ type }) => type),
      mapping: visitTypes.reduce(
        (obj, { type }) => {
          obj[type] = type;
          return obj;
        },
        {} as Record<string, string>,
      ),
    },
  },
  render: (args) => {
    return (
      <DoctorProfilePage
        params={Promise.resolve({ id: args.id })}
        searchParams={Promise.resolve({ "visit-type": args.visitType })}
      />
    );
  },
  decorators: [(Story) => <MainLayout>{Story()}</MainLayout>],
} satisfies Meta<{
  id: string;
  visitType?: VisitType;
}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
