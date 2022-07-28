import { Paper, Group, Center } from "@mantine/core";
import { Section } from "./Section";
export function SummaryBar(props) {
  const { sectionsData } = props;
  const barSections = sectionsData.map((sectionData, index) => {
    return (
      <Section
        key={index}
        title={sectionData.title}
        totalData={sectionData.totalData}
        elementsData={sectionData.elementsData}
      />
    );
  });
  return (
    <Center>
      <Paper
        mt={100}
        sx={{
          backgroundColor: "#1C1C20",
          height: "142px",
          paddingLeft: "32px",
          width: "90%",
        }}
      >
        <Group
          position={barSections.length > 1 ? "left" : "center"}
          spacing={"115px"}
        >
          {barSections}
        </Group>
      </Paper>
    </Center>
  );
}
