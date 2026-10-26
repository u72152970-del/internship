const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email.trim() ||
    !password
  ) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  try {
    // Use SQL parameters instead of concatenating user input.
    const result = await pool.query(
      `SELECT id, full_name, email, role
       FROM public.users
       WHERE LOWER(email) = LOWER($1)
         AND password = $2
         AND is_active = TRUE
       LIMIT 1`,
      [email.trim(), password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const user = result.rows[0];

    return res.status(200).json({
      success: true,
      message: "Login Success",
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login database error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to process login right now.",
    });
  }
});

module.exports = router;