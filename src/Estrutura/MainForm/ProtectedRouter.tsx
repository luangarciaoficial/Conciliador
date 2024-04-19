import {useValidation} from '../Auth/validation/useValidation.ts'

function ProtectedRoute ({ children }) {
  const {isValid} = useValidation();

  return children;
};

export default ProtectedRoute