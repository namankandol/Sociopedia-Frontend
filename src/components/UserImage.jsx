import { Box } from "@mui/material"

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={`https://sociopedia-backend-4601.onrender.com/assets/${image}`}
        alt="user"
      />
    </Box>
  )
}

export default UserImage
