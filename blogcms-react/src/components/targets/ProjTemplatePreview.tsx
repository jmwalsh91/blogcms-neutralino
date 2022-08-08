import {
    Badge,
    Container,
    Grid,
    Image,
    Stack,
    Text,
    Title,
    useMantineTheme,
  } from "@mantine/core";
import { useLogger } from "@mantine/hooks";
import { Project } from "../../services/sb";

  

  function ProjTemplatePreview(project: Project) {
const theme = useMantineTheme();
useLogger('ProjTemplatePreivew', [{project, from: 'uselogger'}])    
    return (
      <>
        <Container mb={"4rem"}>
          <Title order={1} align="right" mt={"3rem"} mb={"1rem"}>
            {project.project_name}
          </Title>
          <Grid>
            <Grid.Col xs={12} lg={6}>
              <Image
                src={project.mockup}
                alt={`${project.project_name} mockup`}
                sx={{
                  border: "1px solid rgba(132, 59, 206, .4)",
                  boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
                }}
              />
            </Grid.Col>
            <Grid.Col  xs={12} lg={6}>
           <Stack>
                <div
                  style={{
                    borderRadius: "1rem",
                    padding: "1rem",
                    border: "1px solid rgba(132, 59, 206, .4)",
                    boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
                  }}
                >
               {project.card_text}
                </div>
                <div
                  style={{
                    borderRadius: "1rem",
                    padding: "1rem",
                    border: "1px solid rgba(132, 59, 206, .4)",
                    boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
                  }}
                >
                  <Text>
                    {project.description}
                  </Text>
                  Built with:
                  {project.stack_badges.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </>
    );
  }
  
  export default ProjTemplatePreview;