/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import toast, { Toaster } from 'react-hot-toast';
import { Box, Modal, Typography } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setScore } from '@/redux/features/scoreSlice';
import { useCreateScoreMutation } from '@/redux/features/apiSlice';
// import IQuestion from '@/Types';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '6px' , 
  boxShadow: 24,
  p: 4,
};
{/* @ts-ignore */}
const QuizDetails = ({quizzes}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const {score} = useAppSelector(state=> state.score)
  const [createScore] = useCreateScoreMutation();
  const {user} = useAppSelector(state => state.user)
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeQuestion, setActiveQuestion] = useState(quizzes?.questions[activeStep])
  const maxSteps = quizzes?.questions?.length;
  const {options, question, correctAnswer} = activeQuestion;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNext = async () => {
    if(activeStep === maxSteps - 1){
      handleOpen();
      const scoreInfo = {
        userEmail: user?.email,
        topic: quizzes?.name,
        score: score.toString()
      }
      await createScore(scoreInfo)
    }
    else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleCorrectAns = (option:string) => {
    if(option === correctAnswer){
      toast.success('Correct ans!')
      dispatch(setScore())

      if(activeStep === maxSteps - 1){
        handleNext();
      }
      else{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
    else{
      toast.error('Your ans is wrong!')
      if(activeStep === maxSteps - 1){
        handleNext();
      }
      else{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  }

  useEffect(() => {
    setActiveQuestion(quizzes?.questions[activeStep])
  }, [activeStep])

  return (
    <div>
      {/* Single Question */}
        <div className="max-w-3xl px-6 py-10 mx-auto space-y-12 border-solid border-2 my-6 shadow-lg">
        <article className="space-y-8 rounded-lg bg-gray-800 text-gray-100">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:tracking-tight md:text-3xl p-4">{question}</h1>
          </div>
        </article>

        <div>
          <div className="flex flex-wrap py-6 border-t border-dashed border-gray-400">
            
            { /* @ts-ignore */
              options?.map((option,i)=> <div key={i}>
                <button onClick={()=> handleCorrectAns(option)} className="inline-block text-xl px-3 py-3 border-solid border-2 border-sky-700 font-bold m-3 rounded-lg hover:bg-gray-900 hover:text-white bg-blue-400 text-gray-900">{option}</button>
              </div >)
            }
          </div>
        </div>
      </div>
      {/* Next and back */}
      <div className="max-w-3xl px-6 py-4 mx-auto space-y-8 border-solid border-2 my-4 shadow-md">
        {/* @ts-ignore */}
        <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{fontWeight: "bold"}}
            size="large"
            onClick={handleNext}
          >
            {activeStep === maxSteps - 1? 'Finish': 'Next'}
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
      />
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className='text-2xl font-bold'>
            You got {score} out of {maxSteps}
          </h1>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            Thanks for participating in this quiz. Practice daily and enhance your skill
          </Typography>
         <div className='flex justify-between mt-2'>
         <Link href='/'><button className="inline-block text-xl px-4 py-2 border rounded-md text-black bg-blue-400 ">Home</button></Link>
         <Link href='/myScore'><button className="inline-block text-xl px-4 py-2 border rounded-md text-black bg-blue-400 ">See all Score</button></Link>
         </div>
        </Box>
      </Modal>
    </div>
  );
};

export default QuizDetails;