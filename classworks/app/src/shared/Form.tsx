import { Button, TextField, FormControl } from "@mui/material";

export default function AboutMe() {
  return (
    <>
      <div className="form">
        <h2>Form</h2>
        <FormControl>
          <TextField
            required
            fullWidth
            variant="outlined"
            // startAdornment="Full Name"
            color="primary"
            size="medium"
            placeholder=" Write full name.."
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            color="primary"
            size="medium"
            placeholder="  Write your email.."
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Write a Message"
          ></TextField>
          <div>
            <Button
              variant="outlined"
              onClick={() => {
                alert("working");
              }}
            >
              Send
            </Button>
          </div>
        </FormControl>
      </div>
    </>
  );
}
