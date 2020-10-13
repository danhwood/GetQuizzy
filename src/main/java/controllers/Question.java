package controllers;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import server.Main;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Path("question/")
@Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)

public class Question {

    @GET
    @Path("get/{QuizID}")
    public String getQuestion(@PathParam("QuizID") Integer quizId) {
        System.out.println("Invoked Question.getQuestion() with QuizID " + quizId);
        try {
            PreparedStatement ps = Main.db.prepareStatement("SELECT QuestionID, Question, AnswerOne, AnswerTwo, AnswerThree, AnswerFour, CorrectAnswer, QuizID FROM Questions WHERE QuizID = ?");
            ps.setInt(1, quizId);
            ResultSet results = ps.executeQuery();
            JSONArray response = new JSONArray();
            JSONObject row = new JSONObject();
            if (results.next() == true) {
                row.put("QuestionID", results.getInt(1));
                row.put("Question", results.getString(2));
                row.put("AnswerOne", results.getString(3));
                row.put("AnswerTwo", results.getString(4));
                row.put("AnswerThree", results.getString(5));
                row.put("AnswerFour", results.getString(6));
                row.put("CorrectAnswer", results.getString(7));
                response.add(row);
            }
            return response.toString();
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to get item, please see server console for more info.\"}";
        }
    }
}

