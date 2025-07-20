import Student from '../models/student.model.js';

// Create
export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student); // return the created student
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read all / query
export const getStudents = async (_req, res) => {
  try {
    const students = await Student.find(); // get all docs from collection
    res.status(200).json(students);        // send as JSON
    console.log(students);
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read one by ID
export const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.status(200).json(student); // return the found student
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update by ID
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,           // return updated doc
      runValidators: true, // apply schema validations
    });
    if (!student) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.status(200).json(student); // return updated student
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete by ID
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.status(200).json({ message: 'Student deleted' }); // confirm deletion
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};