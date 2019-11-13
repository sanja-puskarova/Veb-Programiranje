package mk.ukim.finki.wp.lab.web.servlets;

import mk.ukim.finki.wp.lab.model.Pizza;
import mk.ukim.finki.wp.lab.service.PizzaService;
import org.thymeleaf.context.WebContext;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.util.List;

@WebServlet(name = "ShowPizza",urlPatterns = "")
public class ShowPizza extends HttpServlet {

    private final PizzaService pizzaService;
    private final SpringTemplateEngine springTemplateEngine;
    private WebContext webContext;

    public ShowPizza(PizzaService pizzaService,SpringTemplateEngine springTemplateEngine1) {
        this.pizzaService = pizzaService;
        this.springTemplateEngine = springTemplateEngine1;
    }


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Pizza> pizzas = pizzaService.listPizzas();
        WebContext webContext = new WebContext(request, response, request.getServletContext());
        webContext.setVariable("pizzas", pizzas);
        System.out.println("[WP-Log] {ShowPizza}");
        this.springTemplateEngine.process("listPizzas", webContext, response.getWriter());

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session=request.getSession();
        String pizzaType=request.getParameter("pizza");
        session.setAttribute("pizzaType",pizzaType);
        System.out.println("[WP-Log] {ShowPizza}");
        response.sendRedirect("/selectPizza.do");
    }
}
