﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TodoList.Models;

namespace TodoList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoItemController : ControllerBase
    {
        private static List<TodoItem> items = new List<TodoItem>()
        {
            new TodoItem() {Id = 0, Description = "Prepare the presentation", Status = TodoItemStatus.Todo, Index = 0},
            new TodoItem() {Id = 1, Description = "Review the slides", Status = TodoItemStatus.Todo, Index = 1},
            new TodoItem() {Id = 3, Description = "Prepare the app", Status = TodoItemStatus.Todo, Index = 2},

            new TodoItem() {Id = 4, Description = "Drink Water", Status = TodoItemStatus.Done, Index = 0},
            new TodoItem() {Id = 2, Description = "Get an anxious crisis", Status = TodoItemStatus.Done, Index = 1},
        };

        private readonly ILogger<TodoItemController> _logger;

        public TodoItemController(ILogger<TodoItemController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<TodoItem> Get()
        {
            return items;
        }
        [HttpPost]
        public void Post(TodoItem newItem)
        {
            items.Add(newItem);
        }
        [HttpPut]
        public void Put(TodoItem newItem)
        {
            items.Remove(
                items.Where(x => x.Id == newItem.Id).First()
            );
            items.Add(newItem);
        }
    }
}
