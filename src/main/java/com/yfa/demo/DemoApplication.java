package com.yfa.demo;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;

@SpringBootApplication

@RestController
public class DemoApplication {



	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		
	}



	@GetMapping("/index")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}

	@GetMapping("/addition")
	public String addition(@RequestParam(value = "valueA") String valueA, @RequestParam(value = "valueB", defaultValue = "10") String valueB) {
		int locRes = Integer.parseInt(valueA) + Integer.parseInt(valueB);
		System.out.println("++++++++");
		return locRes + "";
	}

	@GetMapping("/path")
	public String additiontest(@RequestParam(value = "valueA") String valueA, @RequestParam(value = "valueB", defaultValue = "10") String valueB) {
		int locRes = Integer.parseInt(valueA) + Integer.parseInt(valueB);
		System.out.println("Working Directory = " + System.getProperty("user.dir"));
		return locRes + "";
	}

	@GetMapping("/read")
	public String[] read(@RequestParam(value = "noteID") String noteID) {
		ArrayList<String> noteContextList = new ArrayList<String>();
		//System.out.println("test");
		try {
			File myObj = new File("./Notes/1.txt");
			Scanner myReader = new Scanner(myObj);
			while (myReader.hasNextLine()) {
			  String data = myReader.nextLine();
			  //System.out.println(data);
			  noteContextList.add(data);
			}
			myReader.close();
			
			
		  } catch (FileNotFoundException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		  }

		  String[] noteContext = noteContextList.toArray(new String[0]);
		  return noteContext;

	}

	@GetMapping("/write")
	public boolean read(@RequestParam(value = "noteID") String noteID, @RequestParam(value = "context") String context) {
		boolean writeDone = false;
		
		return writeDone;

	}

}
