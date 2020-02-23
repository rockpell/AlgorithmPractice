#include <stdio.h>
#include <stdlib.h>

struct	s_node
{
	int		data;
	int		priority;
	struct s_node	*next;
};

typedef struct s_node	t_node;

struct	s_list
{
	t_node	*head;
	t_node	*tail;
};

typedef struct s_list	t_list;

void	push(t_list *list, int data, int priority)
{
	t_node	*new_node;

	new_node = (t_node *)malloc(sizeof(t_node));
	new_node->data = data;
	new_node->priority = priority;
	new_node->next = NULL;
	if (list->head == NULL)
	{
		list->head = new_node;
		list->tail = new_node;
	}
	else
	{
		list->tail->next = new_node;
		list->tail = new_node;
	}
}

int	is_empty(t_list *list)
{
	if (list->head == NULL)
		return (1);
	return (0);
}

int	pop(t_list *list)
{
	t_node	*remove_node;
	int	result;

	if (is_empty(list))
		return (-1);
	else
	{
		result = list->head->data;
		remove_node = list->head;
		list->head = list->head->next;
		free(remove_node);
		return (result);
	}
}

int	priority_pop(t_list *list)
{
	t_node	*node;
	int	priority;

	node = list->head->next;
	priority = list->head->priority;
	while (node != NULL)
	{
		if (node->priority > priority)
		{
			push(list, pop(list), priority);
			return (priority_pop(list));
		}
		node = node->next;
	}
	return (pop(list));
}

void	init_list(t_list *list)
{
	list->head = NULL;
	list->tail = NULL;
}

void	discard_list(t_list *list)
{
	while (!is_empty(list))
		pop(list);
}

void	process()
{
	t_list	list;
	int	i;
	int	N;
	int	M;
	int	value;

	i = 0;
	scanf("%d %d", &N, &M);
	init_list(&list);
	while (i < N)
	{
		scanf("%d", &value);
		push(&list, i, value);
		i++;
	}
	i = 0;
	while (priority_pop(&list) != M)
		i++;
	printf("%d\n", i + 1);
	discard_list(&list);
}

int	main(void)
{
	int	T;

	scanf("%d", &T);
	while (T > 0)
	{
		process();
		T--;
	}
	return (0);
}
