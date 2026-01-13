import React from "react"
import { useNavigate } from "react-router-dom"

interface ButtonProps {
  className?: string
}

const BusinessButton: React.FC<ButtonProps> = ( {className} ) => {
  const navigate = useNavigate()

  return (
    <button
      className={`px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition ${className ?? ""}`}
      onClick={() => navigate("/business")}
    >
      I'm a Business
    </button>
  )
}

export default BusinessButton
