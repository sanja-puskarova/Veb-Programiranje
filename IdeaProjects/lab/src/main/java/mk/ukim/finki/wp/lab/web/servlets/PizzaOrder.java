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

@WebServlet(name = "PizzaOrder",urlPatterns = "/PizzaOrder.do")
public class PizzaOrder extends HttpServlet {
    private final SpringTemplateEngine springTemplateEngine;

    public PizzaOrder(SpringTemplateEngine springTemplateEngine) {
        this.springTemplateEngine = springTemplateEngine;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session=request.getSession();
        Order order= (Order) session.getAttribute("myOrder");
        order.clientAddress=(String) request.getParameter("clientAddress");
        order.clientName=(String)request.getParameter("clientName");
        session.setAttribute("myOrder",order);
        System.out.println("[WP-Log] {PizzaOrder}");
        response.sendRedirect("/ConfirmationInfo.do");
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session=request.getSession();
        WebContext webContext = new WebContext(request, response, request.getServletContext());
        webContext.setVariable("PizzaSize",session.getAttribute("pizzaSize"));
        Order order= (Order) session.getAttribute("myOrder");
        order.pizzaSize= (String) session.getAttribute("pizzaSize");
        session.setAttribute("myOrder",order);
        webContext.setVariable("PizzaType",session.getAttribute("pizzaType"));
        System.out.println("[WP-Log] {PizzaOrder}");
        this.springTemplateEngine.process("deliveryInfo.html", webContext, response.getWriter());
    }
}
