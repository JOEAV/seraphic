import { Text, Stack, Group, Divider } from "@mantine/core";
import iconMap from "../components/Icons";

export function Section(props) {
  const { totalData, elementsData, title } = props;
  const totalDataComp = totalData ? (
    <Stack spacing={"0px"}>
      <Text
        sx={{
          fontFamily: "Mulish,sans-serif",
          fontSize: "10px",
          color: "#9E9E9E",
        }}
      >
        Total
      </Text>
      <Group spacing={"9px"}>
        <Text
          sx={{
            fontFamily: "Rajdhani,sans-serif",
            fontSize: "24px",
            color: "white",
          }}
        >
          {totalData.number}
        </Text>
        {totalData.showArrowIcon ? iconMap.arrow : null}
      </Group>
    </Stack>
  ) : null;
  const elementsDataComp = (
    <Stack sx={{ flexGrow: 4 }} spacing={0}>
      <Group spacing={0}>
        {elementsData.map((elementData, index) => {
          return (
            <Stack
              spacing={"0px"}
              key={elementData.title}
              sx={{ width: "97px", flexGrow: 1 }}
            >
              <Group spacing={"8px"} align="center">
                <Divider
                  orientation="vertical"
                  color={elementData.color}
                  sx={{
                    height: "15px",
                    borderLeftWidth: "2px",
                    borderRadius: "1px",
                    width: "2px",
                  }}
                />
                <Text
                  sx={{
                    fontFamily: "Mulish,sans-serif",
                    fontSize: "10px",
                    color: "#9E9E9E",
                  }}
                >
                  {elementData.title}
                </Text>
              </Group>
              <Group spacing={"8px"}>
                {elementData.icon ? iconMap[elementData.icon] : null}
                <Text
                  sx={{
                    fontFamily: "Rajdhani,sans-serif",
                    fontSize: "24px",
                    color: "white",
                  }}
                >
                  {elementData.number}
                </Text>
              </Group>
            </Stack>
          );
        })}
      </Group>
      <Stack
        justify="center"
        sx={{
          height: "8px",
          backgroundColor: "#C4C4C41A",
          borderRadius: "2px",
        }}
      >
        <Group align="center" position="center" spacing={"2px"}>
          {elementsData.map((elementData, index) => {
            return (
              <Divider
                key={index}
                color={elementData.color}
                sx={{
                  width: `calc(100% / ${elementsData.length} - 0.5%)`,
                  borderTopWidth: "2px",
                  borderRadius: "1px",
                }}
              />
            );
          })}
        </Group>
      </Stack>
    </Stack>
  );
  return (
    <Stack
      spacing={"12px"}
      mt={20}
      sx={{
        width: totalData
          ? `calc( 98px * ${elementsData.length + 1})`
          : `calc( 98px * ${elementsData.length})`,
      }}
    >
      <Text
        sx={{
          fontFamily: "Mulish,sans-serif",
          fontSize: "12px",
          color: "white",
        }}
      >
        {title}
      </Text>
      <Divider sx={{ opacity: "33%" }} />
      <Group spacing={"55px"} align={"flex-start"}>
        {totalDataComp}
        {elementsDataComp}
      </Group>
    </Stack>
  );
}
