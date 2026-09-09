"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";

function PlanDetail({ plan }) {
  // const [plan, setPlan] = useState(null); // nobody ever sets this

  return (
    <Box sx={{ flex: 1, p: 4 }}>
      <Typography variant="h6">{plan?.title ?? "Select a plan"}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {plan ? JSON.stringify(plan.questions, null, 2) : "—"}
      </Typography>
    </Box>
  );
}

export default PlanDetail;
