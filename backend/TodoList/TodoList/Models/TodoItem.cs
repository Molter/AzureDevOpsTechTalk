using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoList.Models
{
    public enum TodoItemStatus
    {
        Todo = 0,
        Done = 1
    }
    public class TodoItem
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public TodoItemStatus Status { get; set; }
        public int Index { get; set; }
    }
}
