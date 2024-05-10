import React, { FC } from 'react'

interface ErrorMessageProps {
    message?: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  const errorMessage = message || 'Whoops, something went wrong, please try again';

  return <p>{errorMessage}</p>;
};

export default ErrorMessage