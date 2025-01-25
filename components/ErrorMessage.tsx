const ErrorMessage = ({ message, secondMessage }: {
    message: string | undefined;
    secondMessage?: string | undefined;
}) => {
  let errorMessage = '';

  if(message && secondMessage) errorMessage = message;
  else if(message && !secondMessage) errorMessage = message;
  else if(!message && secondMessage) errorMessage = secondMessage;

  return (
    <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
  )
}

export default ErrorMessage;
