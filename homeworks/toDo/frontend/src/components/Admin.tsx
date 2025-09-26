import { Typography, Stack, Box, ListItem, Button } from "@mui/material";
import { useEffect, useState } from "react";

type Task = {
  id: string;
  content: string;
  deleted: boolean;
};

function Admin() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/admin?onlyDeleted=true"
      );
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const restoreTask = async () => {
    try {
      const response = await fetch(`http://localhost:3000/admin`, {
        method: "PUT",
      });
      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant="h5">Admin Panel</Typography>
      </Box>
      <Box
        sx={{
          marginTop: "40px",
          justifyItems: "center",
        }}
      >
        <Typography variant="h5">Deleted tasks</Typography>
        <Typography variant="body2">tasks count: {tasks.length}</Typography>

        <Box>
          {tasks.map((t) => (
            <ListItem
              key={t.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                opacity: 0.6,
              }}
            >
              <span>{t.content}</span>
              <Button
                size="small"
                variant="contained"
                onClick={() => restoreTask()}
              >
                Restore
              </Button>
            </ListItem>
          ))}
        </Box>

        {tasks.length === 0 && (
          <Typography variant="body2" mt={2}>
            No deleted tasks
          </Typography>
        )}

        <Stack direction="row" spacing={1} alignItems={"center"}>
          <Typography variant="body2">{}</Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default Admin;
