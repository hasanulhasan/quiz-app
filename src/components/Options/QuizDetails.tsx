import React, { useEffect, useState } from 'react';
import Question from './Question';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const QuizDetails = ({quizzes}) => {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const [activeQuestion, setActiveQuestion] = useState(quizzes?.questions[activeStep])
  const maxSteps = quizzes?.questions?.length;

  const handleNext = () => {
    if(activeStep === maxSteps - 1){
      console.log('you have finished')
    }
    else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    setActiveQuestion(quizzes?.questions[activeStep])
  }, [activeStep])
  

  return (
    <div>
      {/* single questions */}
      {
        <Question activeQuestion={activeQuestion}/>
      }
      {/* Next and back */}
      <div className="max-w-3xl px-6 py-4 mx-auto space-y-8 border-solid border-2 my-4 shadow-md">
        <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            // disabled={activeStep === maxSteps - 1}
          >
            {activeStep === maxSteps - 1? 'Finish': 'Next'}
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      </div>
    </div>
  );
};

export default QuizDetails;