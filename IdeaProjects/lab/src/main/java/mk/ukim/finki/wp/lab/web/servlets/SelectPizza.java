package mk.ukim.finki.wp.lab.web.servlets;

import mk.ukim.finki.wp.lab.model.Order;
import org.thymeleaf.context.WebContext;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "SelectPizza",urlPatterns = "/selectPizza.do")
public class SelectPizza extends HttpServlet {

    private Order order=new Order();
    private final SpringTemplateEngine springTemplateEngine;
    private WebContext webContext;

    public SelectPizza(SpringTemplateEngine springTemplateEngine) {
        this.springTemplateEngine = springTemplateEngine;

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

            HttpSession session=request.getSession();
            WebContext webContext = new WebContext(request, response, request.getServletContext());
            webContext.setVariable("PizzaType",session.getAttribute("pizzaType"));
            order.pizzaType= (String) session.getAttribute("pizzaType");
            session.setAttribute("myOrder",order);
            System.out.println("[WP-Log] {SelectPizza}");
            this.springTemplateEngine.process("selectPizzaSize.html", webContext, response.getWriter());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session=request.getSession();
        String pizzaSize=request.getParameter("pizza_size");
        session.setAttribute("pizzaSize",pizzaSize);
        System.out.println("[WP-Log] {SelectPizza}");
        response.sendRedirect("/PizzaOrder.do");
    }
}
