"use client";

import { Box } from "@mui/material";
import PlanList from "@/components/PlanList";
import PlanDetail from "@/components/PlanDetail";
import { useState } from "react";

// ─── App ─────────────────────────────────────────────────────────────────────
// PlanList and PlanDetail sit side by side but don't talk to each other.

export default function App() {
  // ── STEP 2: Lift state up ─────────────────────────────────────────────────
  // Move selectedPlan here so both components can access it.
  // Then pass it down as props.

  const [selectedPlan, setSelectedPlan] = useState(null);

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <PlanList selectedPlan={selectedPlan} onSelect={setSelectedPlan} />{" "}
      {/* STEP 3: pass onSelect so it can report up */}
      <PlanDetail plan={selectedPlan} />{" "}
      {/* STEP 3: pass plan so it knows what to show */}
    </Box>
  );
}
