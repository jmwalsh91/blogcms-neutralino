    import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import { Project } from '../services/sb';

    const useStyles = createStyles((theme) => ({
      card: {
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    
      title: {
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: 32,
        marginTop: theme.spacing.xs,
      },
    
      category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
      },
    }));
    
    export function ProjectCard(project: Project) {
      const { classes } = useStyles();
      const theme = useMantineTheme()
    
      return (
        <Paper
          shadow="md"
          p="xl"
          radius="md"
          sx={{ backgroundImage: `url(${project.card_image})` }}
          className={classes.card}
        >
          <div>
            <Text className={classes.category} size="xs">
              {}
            </Text>
            <Title order={3} className={classes.title}>
              {project.project_name}
            </Title>
          </div>
          <Text align='right' color={theme.white}>{project.card_text}</Text>
          <Button variant="white" color="dark" sx={{
            alignSelf: 'end'
          }}>
            Learn more
          </Button>
        </Paper>
      );
    }

    