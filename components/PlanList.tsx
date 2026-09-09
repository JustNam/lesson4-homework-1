"use client";

import { useState, useEffect } from "react";
import { CircularProgress, List, ListItemButton } from "@mui/material";
import { getPlans } from "@/services/plans";
import { supabase } from "@/lib/supabase";

function PlanList({ selectedPlan, onSelect }) {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  // ── STEP 1: Fetch plans ────────────────────────────────────────────────────
  // Add a useEffect here that runs once on mount.
  // Call getPlans() and store the result in plans.

  useEffect(() => {
    async function loadPlans() {
      const data = await getPlans();
      setPlans(data);
      setLoading(false);
    }
    loadPlans();
  }, []);
  // ──────────────────────────────────────────────────────────────────────────

  return loading ? (
    <CircularProgress />
  ) : (
    <List sx={{ width: 280, borderRight: "1px solid #eee" }}>
      {plans.map((p) => (
        <ListItemButton
          key={p.id}
          selected={selectedPlan?.id === p.id}
          onClick={() => onSelect(p)}
        >
          {p.title}
        </ListItemButton>
      ))}
    </List>
  );
}

export default PlanList;
