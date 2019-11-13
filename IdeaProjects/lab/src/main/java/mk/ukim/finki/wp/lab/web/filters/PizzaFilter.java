package mk.ukim.finki.wp.lab.web.filters;

import org.springframework.context.annotation.Profile;

import javax.servlet.*;
import javax.servlet.Filter;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebFilter
public class PizzaFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletResponse httpResp = (HttpServletResponse) servletResponse;

        HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;

        String name = (String) httpRequest.getSession().getAttribute("pizzaType");
        String path = httpRequest.getServletPath();

        if(!"".equals(path)&&(name==null||name.isEmpty())){
            httpResp.sendRedirect("/");
            System.out.println("OKKKKK");
        }else{
            filterChain.doFilter(servletRequest, servletResponse);
            System.out.println("VLEVA2");
        }
    }

    @Override
    public void destroy() {

    }

}
