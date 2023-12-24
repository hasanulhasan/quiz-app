'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useCreateQuestionToDBMutation, useGetQuizQuery } from '@/redux/features/apiSlice';
import Loading from '../loading';

const AddQuiz = () => {
  const router = useRouter();
  const {data, isLoading} = useGetQuizQuery(null)
  const quizTopic = data?.data
  const [createQuestionToDB] = useCreateQuestionToDBMutation();

  const handleSubmit = async (e:any)=> {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const questionData = {
      topicId: Number(data.get('topicId')),
      question: data.get('question'),
      correctAnswer: data.get('correctAnswer'),
      options: [data.get('option-1'), data.get('option-2'), data.get('option-3'), data.get('option-4')]
    }
    console.log(questionData)
    try {
      await createQuestionToDB(questionData).then(data=> {
        if(data){
        toast.success('Question added')
        e.target.reset()
        setTimeout(() => {
          router.push(`/`)
        }, 800);
      }
    })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container component="main" maxWidth="sm" sx={{mb:6}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add Question
          </Typography>
          {isLoading && <Loading/>}
          <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Be sure about your information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-standard-label">Topic</InputLabel>
        <Select
          required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name='topicId'
          label="Topic"
        >
          {
            quizTopic && quizTopic.map(topic => <MenuItem key={topic.id} value={`${parseInt(topic.id)}`}>{topic.name}</MenuItem>)
          }
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="question"
            name="question"
            label="Question"
            multiline
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="option-1"
            name="option-1"
            label="Option-1"
            fullWidth
            multiline
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="option-2"
            name="option-2"
            label="Option-2"
            fullWidth
            multiline
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="option-3"
            name="option-3"
            label="Option-3"
            fullWidth
            multiline
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="option-4"
            name="option-4"
            label="Option-4"
            fullWidth
            multiline
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="correctAnswer"
            name="correctAnswer"
            label="CorrectAnswer"
            multiline
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
        <button type="submit" className="flex items-center justify-center w-full p-3 mt-4 font-semibold tracking-wide rounded-md dark:bg-blue-500 text-white"
          >Submit</button>
          </Box>
        </Paper>
        <Toaster position="top-right"/>
      </Container>
  );
};

export default AddQuiz;