const express = require("express");
const db = require("./db");
const { authenticateToken } = require("./authRoutes");

const router = express.Router();

// 🟢 Get All Users (Admin Only)
router.get("/", authenticateToken, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Access denied" });

  try {
    const [users] = await db.execute("SELECT id, name, email, role FROM users");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔵 Get Single User
router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const [user] = await db.execute("SELECT id, name, email, role FROM users WHERE id = ?", [req.params.id]);
    if (user.length === 0) return res.status(404).json({ error: "User not found" });

    res.json(user[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟠 Update User
router.put("/:id", authenticateToken, async (req, res) => {
  const { name, email, role } = req.body;

  try {
    await db.execute("UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?", 
      [name, email, role, req.params.id]);

    res.json({ message: "User updated successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔴 Delete User
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    await db.execute("DELETE FROM users WHERE id = ?", [req.params.id]);
    res.json({ message: "User deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
