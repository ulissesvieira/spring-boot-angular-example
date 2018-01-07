package com.mydevgeek.utils;

import java.util.ArrayList;
import java.util.List;

import com.mydevgeek.model.User;

public class UserFactory {
	public static List<User> buildUsers() {
		List<User> users = new ArrayList<>();

		User user1 = buildUser(1L, "John", "Doe", "john@email.com");
		User user2 = buildUser(2L, "Jon", "Smith", "smith@email.com");
		User user3 = buildUser(3L, "Will", "Craig", "will@email.com");
		User user4 = buildUser(4L, "Sam", "Lernorad", "sam@email.com");
		User user5 = buildUser(5L, "Ross", "Doe", "ross@email.com");

		users.add(user1);
		users.add(user2);
		users.add(user3);
		users.add(user4);
		users.add(user5);

		return users;
	}

	private static User buildUser(Long id, String fname, String lname, String email) {
		User user = new User();
		user.setId(id);
		user.setFirstName(fname);
		user.setLastName(lname);
		user.setEmail(email);
		return user;
	}
}
